import { eventful } from "../eventful.js";
import { stateful } from "../stateful.js";
import { Idle } from "./StateIdle.js";
import { Pending } from "./StatePending.js";
import { Resolved } from "./StateResolved.js";
import { Rejected } from "./StateRejected.js";

/*
  An async action must complete before it is fired again.
 */
class AsyncAction {
  constructor(
    action,
    {
      fireDelay = 0,
      minTimePending = 1000,
      minTimeResolving = 1500,
      minTimeRejecting = 1500,
    }
  ) {
    Object.assign(
      this,
      stateful.call(this, {
        idle: new Idle(this),
        pending: new Pending(this),
        resolved: new Resolved(this),
        rejected: new Rejected(this),
      })
    );

    Object.assign(
      this,
      eventful.call(this, {
        stateChange: [],
        resolved: [],
        rejected: [],
        error: [],
      })
    );
    Object.assign(this.options, {
      ...this.options,
      fireDelay,
      minTimePending,
      minTimeResolving,
      minTimeRejecting,
    });

    this.tminus0;
    this.timeoutId;
    this.action = action;
  }

  set tminus0(count) {
    this.tminus0 = Date.now() + count;
  }

  isT0() {
    return Date.now() >= this.tminus0;
  }

  startCountdown(event, cb) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.isT0() && cb(), event);
  }

  _fire(...args) {
    this.event(...args)
      .then(this.state.resolve)
      .catch((err) => {});
  }

  fire(...args) {
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.state.fire(...args);
    });
  }
}

export { AsyncAction };
