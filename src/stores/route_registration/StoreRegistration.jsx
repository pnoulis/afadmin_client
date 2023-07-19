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

function useStoreRegistration() {
  const [store, setStore] = React.useState({});

  const handleFormPlayerSubmit = function (form) {
    return Afmachine.registerPlayer(form).catch(catchAferrs());
  };

  return {
    ...store,
    registrationStore: store,
    setRegistrationStore: setStore,
    handleFormPlayerSubmit,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
