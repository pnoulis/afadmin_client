import * as React from "react";
import { ContextProvideRegistration } from "./ContextRegistration";
import { Afmachine } from "/src/app/afmachine.js";
import { catchAferrs } from "/src/err_handling/index.js";

function StoreProvideRegistration({ children }) {
  const store = useStoreRegistration();
  return (
    <ContextProvideRegistration value={store}>
      {children}
    </ContextProvideRegistration>
  );
}

function handlePlayerRegistration(form) {
  return Afmachine.registerPlayer(form).catch(catchAferrs());
}

function searchPlayer(searchTerm) {
  return Afmachine.searchPlayer({ searchTerm }).catch(catchAferrs());
}

function useStoreRegistration() {
  const [store, setStore] = React.useState({
    registrationQueue: [],
  });

  const handlePlayerSelection = function (player) {
    alert(`${player.username} selected`)
    // check player is not already in queue
    // check player is not part of a team
  };

  const handlePlayerRemoval = function () {};

  return {
    ...store,
    registrationStore: store,
    setRegistrationStore: setStore,
    handlePlayerRegistration,
    searchPlayer,
    handlePlayerSelection,
    handlePlayerRemoval,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
