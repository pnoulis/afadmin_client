import * as React from "react";
import { ContextProvideApp } from "./ContextApp";
import { Afmachine } from "/src/afmachine/Afmachine.js";
import { getControllers } from "./getControllers.js";

function StoreProvideApp({ children }) {
  const store = useStoreApp();
  return <ContextProvideApp value={store}>{children}</ContextProvideApp>;
}

function useStoreApp() {
  const [store, setStore] = React.useState({});

  const subscriptionsRef = React.useRef(null);
  if (subscriptionsRef.current == null) {
    subscriptionsRef.current = {
      umount: {
        listeners: [],
      },
      wristbandScan: {
        subscribed: false,
        listeners: [],
      },
    };
  }

  const storeRef = React.useRef(null);
  if (storeRef.current == null) {
    var umount = () =>
      subscriptionsRef.current.umount.listeners.forEach((fn) => fn && fn());
    var notify = (subscription, ...args) =>
      subscriptionsRef.current[subscription]?.listeners.forEach(
        (listener) => listener && listener(...args)
      );
    var on = (event, listener) => {
      if (!subscriptionsRef.current.hasOwnProperty(event)) {
        throw new Error(`Undefined subscription event:${event}`);
      }
      subscriptionsRef.current[event].listeners.push(listener);
    };
    var flush = (event) => {
      if (Object.hasOwn(subscriptionsRef.current, event)) {
        subscriptionsRef.current[event].listeners = [];
      } else {
        throw new Error(`Unknown event:${event}`);
      }
    };
    var isSubscribed = (event) => subscriptionsRef.current[event]?.subscribed;

    storeRef.current = {
      umount,
      notify,
      on,
      flush,
      isSubscribed,
      Afmachine,
      subscriptionsRef,
      controllers: getControllers(storeRef),
    };
  }

  storeRef.current = React.useMemo(
    () => ({
      ...storeRef.current,
      store,
      setStore,
    }),
    [store, setStore]
  );

  React.useEffect(() => {
    const { subscribeWristbandScan } = storeRef.current.controllers;
    if (!isSubscribed("wristbandScan")) {
      subscriptionsRef.current.wristbandScan.subscribed = true;
      subscribeWristbandScan((err, wristband) => {
        if (err) {
          alert(err);
        } else {
          notify("wristbandScan", wristband);
        }
      })
        .then((unsubscribe) => on("umount", unsubscribe))
        .catch();
    }
    return () => umount();
  }, []);

  return {
    ...store,
    ...storeRef.current.controllers,
    setStoreApp: setStore,
    storeAppRef: storeRef,
  };
}

export { StoreProvideApp, useStoreApp };
