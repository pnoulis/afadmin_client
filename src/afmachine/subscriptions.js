import { Subscription } from "./subscription/Subscription.js";
import * as LOG from "./logs.js";
import { Afmachine } from "./Afmachine.js";

function newWristbandScanSubscription(options) {
  return LOG.attachLogsSubscription(
    new Subscription(Afmachine, "/wristband/scan", options)
  );
}

export { newWristbandScanSubscription };
