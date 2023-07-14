import * as React from "react";

function useAfmachineStates(entity) {
  const [st, setSt] = React.useState();

  React.useEffect(() => {
    if (!st) {
      setSt(entity.getState());
    }
    const e = entity.on("stateChange", (c, p) => {
      console.log(`STATE CHANGE: ${p} >>> ${c}`);
      setSt(c);
    });
  }, [entity]);

  return st;
}

export { useAfmachineStates };
