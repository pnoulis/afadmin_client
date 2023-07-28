import * as React from "react";
import { afmachine } from "afmachine/src/index.js";
import { randomPlayer } from "agent_factory.shared/scripts/randomPlayer.js";
import { useAfmachineAsyncAction, useAfmachineEntity } from "../hooks/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";

const p = afmachine.createPlayer(randomPlayer());

function Listing() {
  const [state, run, data, aa] = useAfmachineAsyncAction(
    afmachine.listPackages,
  );

  React.useEffect(() => {
    console.log(
      data((err, data) => {
        console.log(err);
        console.log(data);
      }),
    );
  }, [state]);

  return (
    <div>
      {state === "idle" ? (
        <button onClick={() => run()}>list packages</button>
      ) : (
        <p>loading....</p>
      )}
      <PopoverAsyncState action={aa} />
    </div>
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
          <Listing />
        </div>
      </div>
    </div>
  );
}
