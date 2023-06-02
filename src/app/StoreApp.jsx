import * as React from "react";
import { ContextProvideApp } from "./ContextApp";
import { Afmachine } from "/src/afmachine/Afmachine.js";
import { getControllers } from "./getControllers.js";
import { useRevalidator } from "react-router-dom";

function StoreProvideApp({ children }) {
  const store = useStoreApp();
  return <ContextProvideApp value={store}>{children}</ContextProvideApp>;
}

function useStoreApp() {
  const revalidator = useRevalidator();
  const [store, setStore] = React.useState({
    storeId: "",
  });
  const storeRef = React.useRef(null);
  const subscriptionsRef = React.useRef(null);
  const genId = () => Math.random().toString(32).substring(2, 8);

  if (subscriptionsRef.current == null) {
    subscriptionsRef.current = {
      umount: {
        listeners: [],
      },
      wristbandScan: {
        subscribed: false,
        listeners: [],
      },
      wristbandRegistration: {
        subscribed: false,
        listeners: [
          () => {
            revalidator.revalidate();
            storeRef.current.controllers = getControllers(storeRef);
            setStore({ storeId: genId() });
          },
        ],
      },
      wristbandUnregistration: {
        subscribed: false,
        listeners: [
          () => {
            revalidator.revalidate();
            storeRef.current.controllers = getControllers(storeRef);
            setStore({ storeId: genId() });
          },
        ],
      },
    };
  }

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
    var flush = (event, rmListener) => {
      if (Object.hasOwn(subscriptionsRef.current, event)) {
        const subscription = subscriptionsRef.current[event];
        subscription.listeners = rmListener
          ? subscription.listeners.filter((l) => l != rmListener)
          : [];
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

  React.useEffect(() => {
    const {
      subscribeWristbandScan,
      subscribeWristbandRegistration,
      subscribeWristbandUnregistration,
    } = storeRef.current.controllers;
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
        .catch((err) => console.log(err));
    }

    if (!isSubscribed("wristbandRegistration")) {
      subscriptionsRef.current.wristbandRegistration.subscribed = true;
      subscribeWristbandRegistration((err, registered) => {
        if (err) {
          alert(err);
        } else {
          notify("wristbandRegistration", registered);
        }
      })
        .then((unsubscribe) => on("umount", unsubscribe))
        .catch((err) => console.log(err));
    }

    if (!isSubscribed("wristbandUnregistration")) {
      subscriptionsRef.current.wristbandUnregistration.subscribed = true;
      subscribeWristbandUnregistration((err, unregistered) => {
        if (err) {
          alert(err);
        } else {
          notify("wristbandUnregistration", unregistered);
        }
      })
        .then((unsubscribe) => on("umount", unsubscribe))
        .catch((err) => console.log(err));
    }
    return () => umount();
  }, []);

  return {
    ...store,
    ...storeRef.current.controllers,
    ...storeRef.current,
    setStoreApp: setStore,
    storeAppRef: storeRef,
  };
}

export { StoreProvideApp, useStoreApp };
