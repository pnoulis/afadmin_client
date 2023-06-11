import * as React from "react";
import { ContextProvidePlayer } from "./ContextPlayer.jsx";
import { useStateful } from "../../afmachine/index.js";

function StoreProvidePlayer({ player, children }) {
  const store = useStorePlayer(player);
  return <ContextProvidePlayer player={store}>{children}</ContextProvidePlayer>;
}

function useStorePlayer(player) {
  const state = useStateful(player).getState();
  const registrationState = useStateful(player.registration).getState();

  const onSubmitPlayerRegisterForm = (form) => ({
    onSubmit: (e) => {
      e.preventDefault();
      player.register(form);
    },
    onClick: (e) => {
      e.preventDefault();
      player.register(form);
    },
  });

  return {
    state,
    player,
    onSubmitPlayerRegisterForm,
    registrationState,
  };
}

export { StoreProvidePlayer, useStorePlayer };
