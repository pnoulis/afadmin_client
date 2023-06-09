import { State } from "./State.js";

class Resolved extends State {
  constructor(action) {
    super(action);
  }

  init() {
    this.tminus0(this.action.options.minTimeResolving);
  }

  fire(...args) {
    return undefined;
  }

  resolve() {
    return new Promise((resolve, reject) => {});
  }
}

export { Resolved };
