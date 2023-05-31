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
    removePlayerWristbandRegistrationQueue,
    toggleWristbandPairing,
  } = useContextApp();
  const [store, setStore] = React.useState({
    storeId: "",
    players: [],
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  const handlePlayerSelection = (player) =>
    addPlayerWristbandRegistrationQueue(store.players, player)
      .then((players) => setStore({ players }))
      .catch((err) => console.log(err));

  const handlePlayerRemoval = (player) =>
    removePlayerWristbandRegistrationQueue(store.players, player)
      .then((players) =>
        setStore({
          players,
        })
      )
      .catch((err) => console.log(err));

  const handleWristbandPairToggle = (player) => {
    toggleWristbandPairing(
      player,
      (err, pairedPlayer) =>
        pairedPlayer &&
        setStore({
          storeId: Math.random().toString(32).substring(2, 8),
          players: storeRef.current.players.map((p) =>
            p.username === pairedPlayer.username ? pairedPlayer : p
          ),
        })
    ).then(
      (toggledPlayer) =>
        toggledPlayer &&
        setStore({
          players: storeRef.current.players.map((p) =>
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
    handlePlayerRemoval,
    handleWristbandPairToggle,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
