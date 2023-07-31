import { Button } from "@mui/material";
import * as React from "react";
import { afmachine } from "afmachine/src/index.js";
import { useAfmachineStatefulAA } from "../hooks/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";

const t = afmachine.createTeam().fill();

function SomeAsyncAction() {
  const state = useAfmachineStatefulAA(t.__merge, {
    timePending: 2000,
    timeResolving: 2000,
  });
  return (
    <div>
      <div>{t.name}</div>
      <Button
        variant="contained"
        onClick={() => {
          t.__merge();
        }}
      >
        run __merge
      </Button>
      <div>state: {state} </div>
      <PopoverAsyncState action={t.__merge} />
    </div>
  );
}

export default function scratchUseAsyncAction() {
  return (
    <div>
      <h1>scratch useAfmachineState</h1>
      <div>
        <div>
          <SomeAsyncAction />
        </div>
      </div>
    </div>
  );
}
