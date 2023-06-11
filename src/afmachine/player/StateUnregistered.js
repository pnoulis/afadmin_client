import { State } from './State.js';

class Unregistered extends State {
  constructor(player) {
    super(player);
  }

  pairWristband(cb) {
    console.log(`${this.name} pair wristband`);
    this.player.wristband.togglePairing(cb);
  }
  register(form) {
    console.log(`${this.name} register player`);
    return Promise.resolve("yolo");
  }
}

export { Unregistered };
