import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";
import { Wristband } from "./Wristband.js";
import { AsyncEvent } from "./AsyncEvent.js";

class Player {
  static states = ["cached", "registered", "inTeam", "inGame"];
  static initialize(conf) {
    const player = {};
    player.username = conf?.username || "";
    player.name = conf?.name || "";
    player.surname = conf?.surname || "";
    player.email = conf?.email || "";
    player.password = conf?.password || "";
    player.wristband = new Wristband(conf?.wristband);
    if (conf?.wristbandMerged) {
      player.state = "inTeam";
    } else {
      player.state = "registered";
    }
    return player;
  }

  constructor(player = {}) {
    Object.assign(this, Player.initialize({ ...PLAYER_SCHEMA, ...player }));

    this.subscriptions = {
      stateChange: [],
      pairWristband: new AsyncEvent()
      pairWristband: new AsyncEvent(function (player) {

      }),
    };

    this.states = {
      cached: new Cached(this),
      registered: new Registered(this),
      inTeam: new InTeam(this),
      inGame: new InGame(this),
    };
    this.setState(this.states[this.state]);

    this._pairWristband = new AsyncEvent();
  }

  setState(state, cb) {
    this.state = state;
    this.emit("stateChange");
    this.state.init && this.state.init();
  }

  getState(code) {
    return code
      ? Player.states.findIndex(
          (state) => this.state.constructor.name === state
        )
      : this.state.constructor.name;
  }

  on(event, subscriber) {
    if (!Object.hasOwn(this.subscriptions, event)) {
      throw new Error(`Undefined event: ${event}`);
    } else if (this.subscriptions[event] instanceof AsyncEvent) {
      this.subscriptions[event].onStateChange(subscriber);
    } else {
      this.subscriptions[event].push(subscriber);
    }
  }

  emit(event) {}
  flush(event, subscriber) {}

  _pairWristband() {
    return () => {};
  }

  pairWristband() {
    this.state.pairWristband();
  }
}

class State {
  constructor(player) {
    this.player = player;
  }
}

class Cached extends State {
  static name = "cached";
  constructor(player) {
    super(player);
  }

  pairWristband() {
    alert("pair wristband");
  }
}

class Registered extends State {
  static name = "registered";
  constructor(player) {
    super(player);
  }
  pairWristband() {
    alert("pair wristband");
  }
}

class InTeam extends State {
  static name = "inTeam";
  constructor(player) {
    super(player);
  }
  pairWristband() {
    alert("pair wristband");
  }
}

class InGame extends State {
  static name = "inGame";
  constructor(player) {
    super(player);
  }
  pairWristband() {
    alert("pair wristband");
  }
}

export { Player };
