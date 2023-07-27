import * as React from "react";
import { ContextProvidePlayer } from "/src/contexts/index.js";
import { usePlayer } from "./usePlayer.jsx";

/**
 * Player accepts the following options
 *
 * @param {class} player
 * @param {*} options
 * @param {function} options.onPlayerRegister
 */

function Player({ player: entity, children, ...options }) {
  const player = usePlayer(entity, options);
  return <ContextProvidePlayer ctx={player}>{children}</ContextProvidePlayer>;
}

export { Player };
