import * as React from "react";
import { ContextProvideRegistration } from "./ContextRegistration";
import { useContextApp } from "/src/app/index.js";

function StoreProvideRegistration({ children }) {
  const store = useStoreRegistration();
  return (
    <ContextProvideRegistration value={store}>
      {children}
    </ContextProvideRegistration>
  );
}

function useStoreRegistration() {
  const {
    registerPlayer,
    searchPlayer,
    addPlayerWristbandRegistrationQueue,
    toggleWristbandPairing,
  } = useContextApp();
  const [store, setStore] = React.useState({
    players: [],
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  const handlePlayerSelection = (player) =>
    addPlayerWristbandRegistrationQueue(store.players, player)
      .then((players) => setStore({ players }))
      .catch((err) => console.log(err));

  const handleToggleWristbandPairing = (player) => {
    toggleWristbandPairing(player, () => {}).then((toggledPlayer) =>
      setStore({
        players: store.players.map((p) =>
          p.username === toggledPlayer.username
            ? toggledPlayer
            : {
                ...p,
                wristband: {
                  ...p.wristband,
                  pairing: false,
                },
              }
        ),
      })
    );
  };

  return {
    ...store,
    setStoreRegistration: setStore,
    storeRegistrationRef: storeRef,
    registerPlayer,
    searchPlayer,
    handlePlayerSelection,
    handleToggleWristbandPairing,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
