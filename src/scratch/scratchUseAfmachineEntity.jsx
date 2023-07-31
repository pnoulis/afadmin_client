import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { capitalize } from "js_utils/misc";
import { useAfmachineEntity2 } from "../hooks/index.js";

const p = afmachine.createPlayer();

function Player() {
  const {
    entity: player,
    state,
    id,
    newEntity,
  } = useAfmachineEntity2(p, afmachine.createPlayer.bind(afmachine));

  console.log(state);
  console.log(id);
  return (
    <div>
      state is {state}
      <div
        onClick={() => {
          newEntity();
        }}
      >
        new entity
      </div>
    </div>
  );
}

function SelectState() {
  return (
    <form
      action="#"
      onChange={(e) => {
        e.preventDefault();
        p.setState(p[`get${capitalize(e.target.value)}State`]);
      }}
    >
      <label htmlFor="states">states</label>
      <select name="state" id="states">
        {afmachine.Player.states.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default function scratchUseAfmachineState() {
  return (
    <div>
      <h1>scratch useAfmachineState</h1>
      <div>
        <div>
          <SelectState />
          <Player />
        </div>
      </div>
    </div>
  );
}
