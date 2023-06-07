class AsyncEvent {
  constructor(
    event,
    {
      onResolve = (res) => res,
      onReject = (err) => {
        throw err;
      },
      timeout = 10000,
      fireDelay = 0,
      minTimePending = 1000,
      minTimeResolving = 1500,
      minTimeRejecting = 1500,
    } = {}
  ) {
    Object.assign(this, {
      event,
      onResolve,
      onReject,
      timeout,
      fireDelay,
      minTimePending,
      minTimeResolving,
      minTimeRejecting,
    });
    this.states = {
      idle: new Idle(this),
      pending: new Pending(this),
      resolved: new Resolved(this),
      rejected: new Rejected(this),
    };
    this.state = null;
    this.timeoutId;
    this.listeners = [];
    this.forks = [];
    this.state = this.states.idle;
  }

  setState(state, cb) {
    console.log(
      `[TRANSITION]:asyncEvent ${this.state?.constructor?.name} -> ${state.constructor.name}`
    );
    this.state = state;
    cb && cb();
    this.emitStateChange();
  }

  getState() {
    return this.state?.constructor?.name;
  }

  onStateChange(listener) {
    this.setListeners(this.listeners.concat([listener]));
    return this;
  }

  emitStateChange() {
    this.listeners.forEach((listener) => listener && listener(this.getState()));
  }

  flush(listener) {
    this.setListeners(this.listeners.filter((l) => l !== listener));
    return this;
  }

  setListeners(newListeners) {
    console.log("LISTENERS CHANGE OLD");
    console.log(this.listeners);
    console.log("LISTENERS CHANGE NEW");
    this.listeners = newListeners;
    console.log(this.listeners);
    return this;
  }

  fire(...args) {
    return this.state.fire(...args);
  }

  fork(resolve, reject, ...args) {
    this.forks.push((resolve, reject, ...args) =>
      this.init(resolve, reject, ...args)
    );
  }

  init(resolve, reject, ...args) {
    this.timeoutId = setTimeout(
      () =>
        Promise.reject(new Error("asyncEvent timeout"))
          .catch(this.reject())
          .catch(this.onReject)
          .catch(reject)
          .finally(() => clearTimeout(this.timeoutId)),
      this.timeout
    );

    this.event(...args)
      .then(this.resolve())
      .then(this.onResolve)
      .then(resolve)
      .catch(this.reject())
      .catch(this.onReject)
      .catch(reject)
      .finally(() => clearTimeout(this.timeoutId));
  }

  resolve() {
    return this.state.resolve();
  }

  reject() {
    return this.state.reject();
  }
}

class State {
  constructor(event) {
    this.event = event;
  }

  init() {}
}

class Idle extends State {
  constructor(event) {
    super(event);
  }
  static get name() {
    return "idle";
  }

  fire(...args) {
    return new Promise((resolve, reject) => {
      this.event.setState(this.event.states.pending, () =>
        setTimeout(
          () => this.event.init(resolve, reject, ...args),
          this.event.fireDelay
        )
      );
    });
  }
}

class Pending extends State {
  constructor(event) {
    super(event);
  }
  static get name() {
    return "pending";
  }

  fire(...args) {}
  resolve() {
    this.event.setState(this.event.states.resolved, () =>
      setTimeout(
        () => this.event.setState(this.event.states.idle),
        this.event.minTimeResolving
      )
    );
    return (res) => res;
  }
  reject() {
    this.event.setState(this.event.states.rejected, () =>
      setTimeout(
        () => this.event.setState(this.event.states.settled),
        this.event.minTimeRejecting
      )
    );
    return (err) => {
      throw err;
    };
  }
}

class Resolved extends State {
  constructor(event) {
    super(event);
  }
  static get name() {
    return "resolved";
  }

  fire(...args) {}
  resolve() {
    return (res) => res;
  }
  reject() {
    return (err) => {
      throw err;
    };
  }
}

class Rejected extends State {
  constructor(event) {
    super(event);
  }
  static get name() {
    return "rejected";
  }

  fire(...args) {}
  resolve() {
    return (res) => res;
  }
  reject() {
    return (err) => {
      throw err;
    };
  }
}

export { AsyncEvent };
