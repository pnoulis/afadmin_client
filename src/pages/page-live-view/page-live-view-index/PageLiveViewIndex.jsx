// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitTeams } from "./AwaitTeams.jsx";
import { MUILiveViewTable } from "/src/components/tables/mui-liveview-table/MUILiveViewTable.jsx";

function PageLiveViewIndex() {
  return (
    <StyledPageLiveViewIndex>
      <AwaitTeams>{(teams) => <MUILiveViewTable teams={teams} />}</AwaitTeams>
    </StyledPageLiveViewIndex>
  );
}

const StyledPageLiveViewIndex = styled("div")`
  padding: 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageLiveViewIndex };
