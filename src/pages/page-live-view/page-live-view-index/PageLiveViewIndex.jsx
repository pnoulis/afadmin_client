// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitTeams } from "./AwaitTeams.jsx";
import { TableTeams } from "./TableTeams.jsx";

function PageLiveViewIndex() {
  return (
    <StyledPageLiveViewIndex>
      <AwaitTeams>{(teams) => <TableTeams rows={teams} />}</AwaitTeams>
    </StyledPageLiveViewIndex>
  );
}

const StyledPageLiveViewIndex = styled("div")`
  padding: 50px 25px 25px 25px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageLiveViewIndex };
