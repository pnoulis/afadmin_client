import * as React from "react";
import {
  useStorePlayer,
  ContextProvidePlayer,
} from "/src/stores/player/index.js";

function Player({ player: config, children }) {
  const player = useStorePlayer(config);
  return (
    <ContextProvidePlayer useSchema player={player}>
      {children}
    </ContextProvidePlayer>
  );
}

export { Player };
