import { eventful } from "../src/app/eventful.js";
import { stateful } from "../src/app/stateful.js";
import { Afmachine } from "../src/afmachine/Afmachine.js";

function logStateChange(topic, previous, current) {
  console.log(`[TRANSITION] ${topic} ${previous} -> ${current}`);
}

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
    this.options = { ...this.options, ...options };
    this.overseerId;
    this.subscriptionId;
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

  #isSubscriberExpired(date) {
    return (subscriber) => date >= subscriber.timeout;
  }
  #inspectSubscribers() {
    const expiredSubscribers = this.events.message.filter(
      this.#isSubscriberExpired(Date.now())
    );
    expiredSubscribers.forEach((subscriber) => {
      subscriber.listener(new Error("timeout"));
      this.flush("message", subscriber);
    });

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
    if (!this.overseerId) {
      this.#spawnOverseer();
    }
    return () => this._unregister(subscriber);
  }
  _unregister(subscriber) {
    this.flush("message", subscriber);
  }
  _subscribe() {
    return this.client
      .subscribe(this.topic, this.options, this.#handleMessage.bind(this))
      .then((unsubscribe) => {
        this.subscriptionId = unsubscribe;
        this.changeState(this.states.up);
        this.emit("connected");
      })
      .catch((err) => {
        this.changeState(this.states.down);
        this.emit("error", err);
      });
  }
  #handleMessage(err, msg) {
    console.log("MESSAGE ARRIVED");
    this.emit("message", err, msg);
  }

  subscribe() {
    console.log("SUBSCRIBE FROM STATE");
    console.log(this.getState());
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
    const onSuccess = () => resolve();
    const onError = (err) => reject(err);
    this.subscription.on(
      "connected",
      () => {
        console.log("SUCCESS PENDING");
        this.subscription.flush("error", onError);
        onSuccess();
      },
      { persist: false }
    );
    this.subscription.on(
      "error",
      (err) => {
        this.subscription.flush("connected", onSuccess);
        onError(err);
      },
      { persist: false }
    );
  }
  unsubscribe(resolve, reject) {
    const onSuccess = () =>
      this.subscription._unsubscribe().then(resolve).catch(reject);
    const onError = (err) => resolve(err);
    const handleConnection = () => {
      this.subscription.flush("error", handleError);
      this.subscription._unsubscribe().then(resolve).catch(reject);
    };
    this.subscription.on(
      "connected",
      () => {
        console.log("SUCCESS PENDING");
        this.subscription.flush("error", onError);
        onSuccess();
      },
      { persistent: false, id: "tmp" }
    );
    this.subscription.on(
      "error",
      (err) => {
        this.subscription.flush("connected", onSuccess);
        onError(err);
      },
      { persistent: false }
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

const as = new Subscription(Afmachine, "/wristband/scan");
as.subscribe().then(() => {
  console.log("SUBSCRIBED FROM DOWN");
  console.log(as);
});
as.subscribe().then(() => {
  console.log(as);
  console.log("SUBSCRIBED FROM PENDING");
});
as.subscribe().then(() => {
  console.log(as);
  console.log("SUBSCRIBED FROM PENDING");
});
