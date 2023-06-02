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
    registerWristband,
    searchPlayer,
    addPlayerWristbandRegistrationQueue,
    removePlayerWristbandRegistrationQueue,
    toggleWristbandPairing,
    flush,
  } = useContextApp();
  const [store, setStore] = React.useState({
    players: [],
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  React.useEffect(() => {
    return () => flush("wristbandScan");
  }, []);

  const genId = () => Math.random().toString(32).substring(2, 8);
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
    toggleWristbandPairing(player, (err, scannedWristband, cb) => {
      if (err) return;
      const playerWhileScan = storeRef.current.players.find(
        (p) => p?.username === player.username
      );
      if (playerWhileScan) {
        // if player was not removed while waiting for a wristband scan
        registerWristband(playerWhileScan, scannedWristband)
          .then((pairedPlayer) => {
            cb();
            setStore({
              players: storeRef.current.players.map((p) =>
                p.username === pairedPlayer.username ? pairedPlayer : p
              ),
            });
          })
          .catch((err) => console.log(err));
      }
    }).then(
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
