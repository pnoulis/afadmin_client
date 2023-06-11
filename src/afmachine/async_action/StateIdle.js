import { State } from "./State.js";

class Idle extends State {
  constructor(action) {
    super(action);
  }

  fire(...args) {
    console.log('will FIRE at ');
    console.log(this.action.options.fireDelay);
    this.action.tminus0 = this.action.options.fireDelay;
    this.action.startCountdown(this.action.options.fireDelay, () => {
      this.action.changeState(this.action.getPendingState);
      this.action._fire(...args);
    });
  }

}

export { Idle };
