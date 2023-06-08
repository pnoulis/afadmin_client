function getState(code) {
  return code
    ? Subscription.states.findIndex(
        (state) => this.state.constructor.name === state
      )
    : this.state?.constructor.name;
}
function setState(state, cb) {
  this.state = state;
  this.state.init && this.state.init();
  cb && cb();
  return this;
}
function inState(state) {
  return state === this.state.constructor.name;
}

function compareStates(test) {
  return test(
    Subscription.states.reduce((car, cdr, i) => ({ ...car, [cdr]: i }), {}),
    this.getState("code")
  );
}

function stateful(states, options = {}) {
  if (!Object.hasOwn(this.constructor, "states")) {
    Object.defineProperty(this.constructor, "states", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: Object.keys(states),
    });
  }
  return {
    states,
    options: {
      ...this.options,
      ...options,
    },
    state: null,
    getState: getState.bind(this),
    setState: setState.bind(this),
    inState: inState.bind(this),
    compareStates: compareStates.bind(this),
  };
}

export { stateful };
