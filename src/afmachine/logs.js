function logStateChange(previousState, currentState, context) {
  console.log(`[TRANSITION] ${previousState} -> ${currentState}`);
}
function logSubscriptionDisconnected(subscription) {
  console.log(`[SUBSCRIPTION] ${subscription.topic} DISCONNECTED`);
}
function logSubscriptionConnected(subscription) {
  console.log(`[SUBSCRIPTION] ${subscription.topic} CONNECTED`);
}
function logSubscriptionMessage(err, msg, subscription) {
  console.log(`[SUBSCRIPTION] ${subscription.topic} MESSAGE`);
  console.log(err || msg);
}
function logSubscriptionError(err, subscription) {
  console.log(`[SUBSCRIPTION] ${subscription.topic} ERROR`);
  console.log(err);
}

function attachLogsSubscription(subscription) {
  subscription.on("stateChange", logStateChange);
  subscription.on("disconnected", logSubscriptionDisconnected);
  subscription.on("connected", logSubscriptionConnected);
  subscription.on("message", logSubscriptionMessage);
  subscription.on("error", logSubscriptionError);
  return subscription;
}

export {
  logStateChange,
  logSubscriptionConnected,
  logSubscriptionDisconnected,
  logSubscriptionError,
  logSubscriptionMessage,
  attachLogsSubscription,
};
