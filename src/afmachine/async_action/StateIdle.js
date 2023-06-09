import { State } from "./State.js";

class Idle extends State {
  constructor(action) {
    super(action);
  }

  fire(...args) {
    this.tminus0(this.action.options.fireDelay);
    this.actions.startCountdown(this.action.options.fireDelay, () => {
      this.action.changeState(this.action.getPendingState);
      this._fire(...args);
    });
  }
}

export { Idle };
