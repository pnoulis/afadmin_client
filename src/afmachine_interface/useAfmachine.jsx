import * as React from "react";
import { getEvents } from "./getEvents.js";
import { Afmachine } from "./Afmachine.js";

const AfmachineCtx = React.createContext(null);

const useAfmachineCtx = () => {
  const ctx = React.useContext(AfmachineCtx);
  if (ctx == null) {
    throw new Error("<AfmachineCtxProvider/> missing");
  }
  return {
    Afmachine: ctx,
    ...getEvents(ctx),
  };
};

const ProvideAfmachine = ({ children }) => {
  return (
    <AfmachineCtx.Provider value={Afmachine}>{children}</AfmachineCtx.Provider>
  );
};

export { useAfmachineCtx, ProvideAfmachine };
