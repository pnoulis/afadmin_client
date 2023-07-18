import * as aferrs from "agent_factory.shared/errors.js";
import { useContextApp, StoreProvideApp } from "/src/stores/index.js";
import Button from "@mui/material/Button";

function Compo() {
  const { catchAferrs } = useContextApp();
  return (
    <div>
      <Button
        onClick={() => {
          catchAferrs()(new aferrs.ERR_TIMEOUT());
        }}
        variant="contained"
      >
        404
      </Button>
    </div>
  );
}

export default function scratchErrors() {
  return (
    <StoreProvideApp>
      <div>
        <h1>scratch errors</h1>
        <div>
          <Compo/>
        </div>
      </div>
    </StoreProvideApp>
  );
}
