import { State } from "./State.js";

class Pending extends State {
  constructor(action) {
    super(action);
  }

  init() {
    this.tminus0(this.action.options.minTimePending);
  }

  fire(...args) {
    return undefined;
  }

  resolve(rr, reject) {
    return new Promise((resolve, reject) => {
      this.action.startCountdown(this.actions.options.minTimePending, () => {
        this.action.changeState(this.actions.getResolvedState);
        return resolve(this.action.resolved());
      });
    });
  }
}

export { Pending };
