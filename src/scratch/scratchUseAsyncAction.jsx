import * as React from "react";
import { Afmachine } from "afmachine";
import { useAsyncAction } from "../hooks/useAsyncAction";
import { useAfmachineEntity } from "../hooks/useAfmachineEntity.jsx";
import { randomPlayer } from "agent_factory.shared/scripts/randomPlayer.js";

const p = Afmachine.createPlayer(randomPlayer());

function Listing() {
  const [state, run] = useAsyncAction(() => Afmachine.listPackages(), {
    timePending: 5000,
  });

  return state === "idle" ? (
    <button onClick={() => run()}>list packages</button>
  ) : (
    <p>loading....</p>
  );
}

function Registration() {
  const [state] = useAfmachineEntity(p.registration);
  return state === "idle" ? (
    <button onClick={() => p.register()}>register</button>
  ) : (
    <p>registering....</p>
  );
}

function Player() {
  const [state] = useAfmachineEntity(p);

  return (
    <>
      <div>name is: {p.username}</div>
      <div>email is: {p.email}</div>
      <div>state is: {state}</div>
    </>
  );
}

export default function scratchUseAsyncAction() {
  return (
    <div>
      <h1>scratch useAfmachineState</h1>
      <div>
        <div>
          <Registration />
          <Player />
          <Listing />
        </div>
      </div>
    </div>
  );
}
