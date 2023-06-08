function ensureEvent(event) {
  if (!Object.hasOwn(this.events, event)) {
    const ERR_UNRECOGNIZED_EVENT = new Error(`Unrecognized event: ${event}`);
    this.emit("error", ERR_UNRECOGNIZED_EVENT);
    throw ERR_UNRECOGNIZED_EVENT;
  }
}

function on(event, listener) {
  this.ensureEvent(event);
  this.events[event].push(listener);
  return this;
}

function flush(event, listener) {
  this.ensureEvent(event);
  if (listener) {
    this.events[event] = this.events.filter((l) => l !== listener);
  } else {
    this.events[event] = [];
  }
  return this;
}

function emit(event, ...args) {
  this.ensureEvent(event);
  this.events[event].forEach((listener) => listener && listener(...args));
  return this;
}

function eventful(events = {}) {
  return {
    events: {
      error: [],
      ...events,
    },
    ensureEvent: ensureEvent.bind(this),
    on: on.bind(this),
    flush: flush.bind(this),
    emit: emit.bind(this),
  };
}

function getState(code) {
  return code
    ? Subscription.states.findIndex(
        (state) => this.state.constructor.name.toLowerCase() === state
      )
    : this.state.constructor.name.toLowerCase();
}
function setState(state, cb) {
  this.state = state;
  this.state.init && this.state.init();
  cb && cb();
  return this;
}
function inState(state) {
  return state === this.state.constructor.name.toLowerCase();
}

function compareStates(test) {
  return test(
    Subscription.states.reduce((car, cdr, i) => ({ ...car, [cdr]: i }), {}),
    this.getState("code")
  );
}

function stateful(states) {
  return {
    states,
    state: null,
    getState: getState.bind(this),
    setState: setState.bind(this),
    inState: inState.bind(this),
    compareStates: compareStates.bind(this),
  };
}

export { eventful, stateful };
