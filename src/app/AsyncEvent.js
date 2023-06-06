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
      resolveDuration = 1500,
      rejectDuration = 1500,
    } = {}
  ) {
    Object.assign(this, {
      event,
      onResolve,
      onReject,
      timeout,
      fireDelay,
      resolveDuration,
      rejectDuration,
    });
    this.states = {
      idle: new Idle(this),
      pending: new Pending(this),
      resolved: new Resolved(this),
      rejected: new Rejected(this),
      settled: new Settled(this),
    };
    this.state = null;
    this.setState(this.states.idle);
    this.timeoutId;
  }

  setState(state, cb) {
    console.log(
      `[TRANSITION]:asyncEvent ${this.state?.constructor?.name} -> ${state.constructor.name}`
    );
    this.state = state;
    cb && cb();
  }

  getState() {
    return this.state?.constructor?.name;
  }

  fire(...args) {
    return this.state.fire(...args);
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
        () => this.event.setState(this.event.states.settled),
        this.event.resolveDuration
      )
    );
    return (res) => res;
  }
  reject() {
    this.event.setState(this.event.states.rejected, () =>
      setTimeout(
        () => this.event.setState(this.event.states.settled),
        this.event.rejectDuration
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

class Settled extends State {
  constructor(event) {
    super(event);
  }
  static get name() {
    return "settled";
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
