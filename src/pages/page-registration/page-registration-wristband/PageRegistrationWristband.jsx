// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  useRegistrationQueue,
} from "/src/components/registration-queue/index.js";
import { ComboboxSearchPlayer } from "/src/pages/page-registration/page-registration-wristband/ComboboxSearchPlayer.jsx";
import { ComboboxOptionPlayer } from "/src/pages/page-registration/page-registration-wristband/ComboboxOptionPlayer.jsx";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function PageRegistrationWristband() {
  const ctx = useRegistrationQueue([]);

  const searchPlayer = React.useCallback(
    (searchTerm) => afmachine.searchPlayer({ searchTerm }),
    [],
  );

  return (
    <StyledPageRegistrationWristband>
      <ComboboxSearchPlayer
        style={{ width: "100%", height: "100%" }}
        searchPlayer={searchPlayer}
        onSelect={ctx.addQueue}
        Option={ComboboxOptionPlayer}
      />
      <ContextProvideRegistrationQueue ctx={ctx}>
        <RegistrationQueue />
      </ContextProvideRegistrationQueue>
    </StyledPageRegistrationWristband>
  );
}

const StyledPageRegistrationWristband = styled("div")`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player pair_wristband";
  justify-items: end;
  align-items: start;
  column-gap: 120px;

  #registration-queue {
    height: 505px;
    align-self: end;
  }
`;

export { PageRegistrationWristband };
