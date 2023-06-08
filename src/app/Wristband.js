import { WRISTBAND_SCHEMA } from "agent_factory.shared/schemas.js";
import { AsyncEvent } from "./AsyncEvent.js";

class Subscription {
  constructor(subscription) {
    this.subscription = subscription;
    this.listeners = [];
  }
}

class Wristband {
  static subscriptions = {
    wristbandScan: new Subscription(),
  };
  static states = ["empty", "pairing", "scanned", "paired"];
  static colors = [
    "black",
    "red",
    "purple",
    "green",
    "yellow",
    "blue",
    "orange",
  ];

  static hydrate(conf) {
    const wristband = {};
    wristband.number = conf?.wristbandNumber || null;
    wristband.color = conf?.wristbandColor || null;

    if (this.number && wristband?.active) {
      wristband.state = Wristband.states[3];
    } else if (this.number) {
      wristband.state = Wristband.states[2];
    } else {
      wristband.state = Wristband.states[0];
    }
    return wristband;
  }

  constructor(wristband = {}) {
    Object.assign(
      this,
      Wristband.hydrate({ ...WRISTBAND_SCHEMA, ...wristband })
    );
    this.subscriptions = {
      stateChange: [],
      scan: Wristband.subscriptions.wristbandScan.flush(),
    };
    this.states = {
      empty: new Empty(this),
      pairing: new Pairing(this),
      scanned: new Scanned(this),
      paired: new Paired(this),
    };
    this.setState(this.states[this.state]);
  }

  setState(state, cb) {
    this.state = state;
    this.emit("stateChange");
    this.state.init && this.state.init();
  }

  getState(code) {
    return code
      ? Wristband.states.findIndex(
          (state) => this.state.constructor.name === state
        )
      : this.state.constructor.name;
  }
  inState(state) {
    return state === this.state.constructor.name;
  }

  on(event, subscriber) {
    if (!Object.hasOwn(this.subscriptions, event)) {
      throw new Error(`Unrecognized event: ${event}`);
    } else if (this.subscriptions[event] instanceof AsyncEvent) {
      this.subscriptions[event].onStateChange(subscriber);
    } else if (this.subscriptions[event] instanceof Subscription) {
      this.subscriptions[event].on("message", subscriber);
    } else {
      this.subscriptions[event].push(subscriber);
    }
  }

  emit(event, ...args) {}

  flush(event, subscriber) {}

  getColor(code) {
    return code
      ? Wristband.colors.findIndex((color) => color === this.color)
      : this.color;
  }
}

class State {
  constructor(wristband) {
    this.wristband = wristband;
  }
}

class Empty extends State {
  static name = "empty";
  constructor(wristband) {
    super(wristband);
  }
}

class Pairing extends State {
  static name = "pairing";
  constructor(wristband) {
    super(wristband);
  }
}

class Scanned extends State {
  static name = "scanned";
  constructor(wristband) {
    super(wristband);
  }
}

class Paired extends State {
  static name = "paired";
  constructor(wristband) {
    super(wristband);
  }
}

export { Wristband };
