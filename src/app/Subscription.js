import { Afmachine } from '/src/afmachine/Afmachine.js';

class Subscription {
  static states = ["offline", "pending", "online", "error"];
  constructor() {
    this.subscriptions = {
      offline: [],
      pending: [],
      online: [],
      error: [],
      message: [],
    };
  }
  init() {
    Afmachine.subscribe(this.topic)
  }
}
