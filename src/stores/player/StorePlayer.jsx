import * as React from "react";
import { useContextApp } from "/src/app/index.js";
import { ContextProvidePlayer } from "./ContextPlayer.jsx";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";

function StoreProvidePlayer({ children }) {
  const player = useStorePlayer();
  return (
    <ContextProvidePlayer useSchema player={player}>
      {children}
    </ContextProvidePlayer>
  );
}

function useStorePlayer(config) {
  const app = useContextApp();
  const [store, setStore] = React.useState({
    ...window.structuredClone(PLAYER_SCHEMA),
    ...config,
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  /*
    ACTIONS
   */

  /*
    EVENT HANDLERS
   */

  /*
    EVENTS
   */

  return {
    ...store,
    setStorePlayer: setStore,
    storePlayerRef: storeRef,
  };
}

export { StoreProvidePlayer, useStorePlayer };
