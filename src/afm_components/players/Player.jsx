import * as React from "react";
import { StoreProvidePlayer } from "./StorePlayer.jsx";

function Player({ player, children, ...props }) {
  return (
    <StoreProvidePlayer player={player} {...props}>
      {children}
    </StoreProvidePlayer>
  );
}

export { Player };
