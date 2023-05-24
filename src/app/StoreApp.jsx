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
    storeRef.current = {
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

  const umount = () =>
    subscriptionsRef.current.umount.listeners.forEach((fn) => fn && fn());
  const notify = (subscription, ...args) =>
    subscriptionsRef.current[subscription]?.listeners.forEach((listener) =>
      listener(...args)
    );
  const on = (event, listener) => {
    if (!subscriptionsRef.current.hasOwnProperty(event)) {
      throw new Error(`Undefined subscription event:${event}`);
    }
    subscriptionsRef.current[event].listeners.push(listener);
  };

  const isSubscribed = (event) => subscriptionsRef.current[event]?.subscribed;

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
