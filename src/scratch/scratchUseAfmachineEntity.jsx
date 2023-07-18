import * as React from "react";
import { Afmachine } from "afmachine";
import { useAfmachineEntity } from "../hooks/useAfmachineEntity.jsx";
import { capitalize } from "js_utils/misc";

const p = Afmachine.createPlayer();

function Player() {
  const [state, player] = useAfmachineEntity(p);

  return <div>state is: {state}</div>;
}

function SelectState() {
  return (
    <form
      action="#"
      onChange={(e) => {
        p.setState(p[`get${capitalize(e.target.value)}State`]);
      }}
    >
      <label htmlFor="states">states</label>
      <select name="state" id="states">
        {p.getStates().map((state, i) => (
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
