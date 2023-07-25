import { Button } from "@mui/material";
import * as React from "react";
import { PopoverAsyncAction } from "/src/components/async/PopoverAsyncAction.jsx";
import { renderDialog } from "/src/components/dialogs/index.js";
import { Afmachine } from "/src/app/afmachine.js";

export default function scratchPopoverAsyncAction() {
  return (
    <div>
      <h1>scratch popover async action</h1>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            renderDialog(null, PopoverAsyncAction, {
              action: () => Promise.reject(new Error('youhtoenuth')),
              timeResolving: 2000,
              timePending: 2000,
              timeRejecting: 2000,
            }, (data) => {
              console.log(data);
            });
          }}
        >
          show dialog
        </Button>
      </div>
    </div>
  );
}
