import { eventful } from "./eventful.js";
import { stateful } from "./stateful.js";

function logStateChange(topic, previous, current) {
  console.log(`[TRANSITION] ${topic} ${previous} -> ${current}`);
}

/*
  Options:
  mode: persistent,
  timeout: 3000,
  persistListeners: true
 */

class Subscription {
  constructor(client = null, topic = "", options = {}) {
    Object.assign(
      this,
      stateful.call(this, {
        down: new Down(this),
        pending: new Pending(this),
        up: new Up(this),
      })
    );
    Object.assign(
      this,
      eventful.call(this, {
        stateChange: [],
        disconnected: [],
        connected: [],
        message: [],
        error: [],
      })
    );

    this.client = client;
    this.topic = topic;
    this.options = { ...this.options, mode: "persistent", ...options };
    this.overseerId = null;
    this.subscriptionId = null;
    this.on("stateChange", logStateChange);
    this.changeState(this.states.down);
  }

  changeState(state, cb) {
    const currentState = this.getState();
    this.setState(state, () => {
      this.emit(
        "stateChange",
        this.topic,
        currentState,
        state.constructor.name
      );
      cb && cb();
    });
  }

  #inspectSubscribers() {
    // remove expired subscribers
    const now = Date.now();
    this.events.message = this.events.message.reduce((car, cdr) => {
      if (now >= cdr.timeout) {
        cdr.listener(new Error("Subscription timeout"));
        return car;
      } else {
        return [...car, cdr];
      }
    }, []);

    if (this.events.message.length < 1) {
      this.#killOverseer();
    }
  }
  #spawnOverseer() {
    this.overseerId = setInterval(
      () => this.#inspectSubscribers(),
      this.options.timeout
    );
  }
  #killOverseer() {
    clearInterval(this.overseerId);
  }

  _register(subscriber, options) {
    this.on("message", subscriber, options);
    // if (!this.overseerId) {
    //   this.#spawnOverseer();
    // }
    return () => this._unregister(options.id || subscriber);
  }
  _unregister(subscriber) {
    this.flush("message", subscriber);
  }
  _unsubscribe() {
    return new Promise((resolve, reject) => {
      try {
        this.subscriptionId && this.subscriptionId();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
  _subscribe() {
    return this.client
      .subscribe(
        this.topic,
        { mode: this.options.mode },
        this.#handleMessage.bind(this)
      )
      .then((unsubscribe) => {
        this.subscriptionId = unsubscribe;
        this.changeState(this.states.up);
        this.emit("connected");
      })
      .catch((err) => {
        this.changeState(this.states.down);
        this.emit("error", err);
        this.emit("message", err);
      });
  }
  #handleMessage(err, msg) {
    this.emit("message", err, msg);
  }

  subscribe() {
    return new Promise((resolve, reject) =>
      this.state.subscribe(resolve, reject)
    );
  }
  unsubscribe() {
    return new Promise((resolve, reject) =>
      this.state.unsubscribe(resolve, reject)
    );
  }
  register(subscriber, options) {
    return this.state.register(subscriber, options);
  }
}

class State {
  constructor(subscription) {
    this.subscription = subscription;
  }
  init() {}
  subscribe(resolve, reject) {}
  unsubscribe(resolve, reject) {}
  register(subscriber, options) {}
}

class Down extends State {
  static name = "down";
  constructor(subscription) {
    super(subscription);
  }
  subscribe(resolve, reject) {
    this.subscription._subscribe().then(resolve).catch(reject);
    this.subscription.changeState(this.subscription.states.pending);
  }
  unsubscribe(resolve) {
    resolve();
  }
  register(subscriber, options) {
    this.subscription._subscribe();
    return this.subscription._register(subscriber, options);
  }
}

class Pending extends State {
  static name = "pending";
  constructor(subscription) {
    super(subscription);
  }
  subscribe(resolve, reject) {
    this.subscription.on(
      "connected",
      () => {
        this.subscription.flush("*", "pending");
        resolve();
      },
      {
        id: "pending",
      }
    );
    this.subscription.on(
      "error",
      (err) => {
        this.subscription.flush("*", "pending");
        reject(err);
      },
      { id: "pending" }
    );
  }
  unsubscribe(resolve, reject) {
    this.subscription.on(
      "connected",
      () => {
        this.subscription.flush("*", "pending");
        this.subscription._unsubscribe().then(resolve).catch(reject);
      },
      { id: "pending" }
    );
    this.subscription.on(
      "error",
      (err) => {
        this.subscription.flush("*", "pending");
        reject(err);
      },
      { id: "pending" }
    );
  }
  register(subscriber, options) {
    return this.subscription._register(subscriber, options);
  }
}

class Up extends State {
  static name = "up";
  constructor(subscription) {
    super(subscription);
  }
  subscribe(resolve) {
    resolve();
  }
  unsubscribe(resolve, reject) {
    this.subscription._unsubscribe().then(resolve).catch(reject);
  }
  register(subscriber, options) {
    return this.subscription._register(subscriber, options);
  }
}

export { Subscription };
