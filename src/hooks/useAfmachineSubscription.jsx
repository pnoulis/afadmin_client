// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { afmachine } from "/src/services/afmachine/afmachine.js";

function useAfmachineSubscription(route, onMsg) {
  const [subscribed, setSubscribed] = React.useState(false);
  const [msg, setMsg] = React.useState(null);
  const unsubRef = React.useRef(null);

  const subscribe = function (unsub) {
    unsubscribe();
    unsubRef.current = unsub;
    setSubscribed(true);
  };

  const unsubscribe = function () {
    if (typeof unsubRef.current === "function") {
      unsubRef.current();
      unsubRef.current = null;
      setSubscribed(false);
    }
  };

  const listener = function (unsubed, err, msg) {
    if (unsubed && subscribed) {
      unsubRef.current = null;
      setSubscribed(false);
    }
    setMsg(err || { ...msg });
  };

  React.useEffect(() => {
    if (!(route in afmachine)) {
      throw new Error(`Subscription topic ${route} missing from afmachine`);
    }
    afmachine[route]({ listener })
      .then(subscribe.bind(null))
      .catch(listener.bind(null, false));
    return unsubscribe;
  }, [route]);

  React.useEffect(() => {
    if (msg && typeof onMsg === "function") {
      onMsg(msg);
    }
  }, [msg, setMsg]);

  return [msg, subscribed, unsubscribe];
}

export { useAfmachineSubscription };
