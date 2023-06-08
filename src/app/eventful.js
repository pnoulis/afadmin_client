function packageListener(listener, options = {}) {
  return {
    listener,
    persistent: options.persist ?? this.options.persistListeners,
    timeout: Date.now() + (options.timeout || this.options.timeout),
    ...options,
  };
}
function ensureEvent(event) {
  if (!Object.hasOwn(this.events, event)) {
    const ERR_UNRECOGNIZED_EVENT = new Error(`Unrecognized event: ${event}`);
    this.emit("error", ERR_UNRECOGNIZED_EVENT);
    throw ERR_UNRECOGNIZED_EVENT;
  }
}

function on(event, listener, options) {
  this.ensureEvent(event);
  this.events[event].push(this.packageListener(listener, options));
  return this;
}

function flush(event, listener) {
  this.ensureEvent(event);
  console.log("FLUSHING");
  console.log(event);
  console.log(this.events[event]);
  console.log(this.events[event][0].listener === listener);
  console.log(this.events[event][1].listener === listener);
  if (listener) {
    this.events[event] = this.events[event].filter(
      (packagedListener) => packagedListener.listener !== listener
    );
  } else {
    this.events[event] = [];
  }
  return this;
}

function emit(event, ...args) {
  this.ensureEvent(event);
  console.log("EMIT");
  console.log(event);
  console.log(this.events[event]);
  this.events[event] = this.events[event].filter(({ listener, persistent }) => {
    listener && listener(...args);
    return persistent;
  });
  return this;
}

function eventful(events = {}, options = {}) {
  return {
    events: {
      error: [],
      ...events,
    },
    options: {
      ...this.options,
      persistListeners: true,
      timeout: 30000,
      ...options,
    },
    packageListener: this.packageListener || packageListener.bind(this),
    ensureEvent: ensureEvent.bind(this),
    on: on.bind(this),
    flush: flush.bind(this),
    emit: emit.bind(this),
  };
}

export { eventful };
