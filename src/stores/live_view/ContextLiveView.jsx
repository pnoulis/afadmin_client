import * as React from "react";

const ContextLiveView = React.createContext(null);

function ContextProvideLiveView({ value, children }) {
  return (
    <ContextLiveView.Provider value={value}>
      {children}
    </ContextLiveView.Provider>
  );
}

function useContextLiveView() {
  const ctx = React.useContext(ContextLiveView);
  if (ctx == null) {
    throw new Error("<ContextProvideLiveView/> missing");
  }
  return ctx;
}

export { ContextProvideLiveView, useContextLiveView };
