import * as React from "react";
import { useAfmachine } from "/src/afmachine_interface/index.js";
import { getControllers } from "./getControllers.js";
import { modelSchema } from "./modelSchema.js";

function useApp() {
  const [globalModel, setGlobalModel] = React.useState(modelSchema);
  const umountListenersRef = React.useRef([
    () => console.log("APP UNMOUNTING"),
  ]);
  const listenersRef = React.useRef([]);
  const appRef = React.useRef(null);

  appRef.current = React.useMemo(
    () => ({
      globalModel,
      setGlobalModel,
      umountListenersRef,
      umount: () => umountListenersRef.current.forEach((fn) => fn()),
      listenersRef,
      Afmachine: useAfmachine().Afmachine,
      ...getControllers(appRef),
    }),
    [globalModel, setGlobalModel]
  );

  React.useEffect(() => {
    const { Afmachine } = appRef.current;
    const unsubWristbandScan = Afmachine.subscribe(
      "/wristband/scan",
      {
        mode: "persistent",
      },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        if (res.result === "NOK") {
          const err = new Error("WRISTBAND SUBSCRIPTION RETURNED NOK");
          console.log(err);
        } else {
          listenersRef.current
            .filter((l) => l.type === "wristbandScan")
            .forEach((l) => l.cb(res));
        }
      }
    );
    umountListenersRef.current.push(unsubWristbandScan);
    return () => appRef.current.umount();
  }, []);

  console.log("LISTENERS REF");
  console.log(listenersRef);
  return appRef.current;
}

export { useApp };
