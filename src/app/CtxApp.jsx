import * as React from "react";
import { Afmachine } from "/src/afmachine/Afmachine.js";
import { getControllers } from "./getControllers.js";

const CtxApp = React.createContext(null);
function ProvideCtxApp({ value, children }) {
  return <CtxApp.Provider value={value}>{children}</CtxApp.Provider>;
}
function useCtxApp() {
  const ctx = React.useContext(CtxApp);
  if (ctx == null) {
    throw new Error("<ProvideCtxApp/> missing");
  }
}
function ProvideStoreApp({ children }) {
  const store = useStoreApp();
  return <ProvideCtxApp value={store}>{children}</ProvideCtxApp>;
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

  const appRef = React.useRef(null);
  if (appRef.current == null) {
    appRef.current = {
      Afmachine,
      subscriptionsRef,
      ...getControllers(appRef),
    };
  }

  appRef.current = React.useMemo(
    () => ({
      ...appRef.current,
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
    const { subscribeWristbandScan } = appRef.current;
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
    setApp: setStore,
    appRef,
  };
}

export { ProvideCtxApp, useCtxApp, ProvideStoreApp, useStoreApp };
