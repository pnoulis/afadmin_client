// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { MUIScoreboardTable } from "../../../components/tables/mui-scoreboard-table/MUIScoreboardTable.jsx";

function PageScoreboardLive() {
  return (
    <StyledPageScoreboardLive>
      <AwaitScoreboardTeams>
        {(scoreboard) => {
          return <MUIScoreboardTable teams={scoreboard.teams} />;
        }}
      </AwaitScoreboardTeams>
    </StyledPageScoreboardLive>
  );
}

const StyledPageScoreboardLive = styled("div")`
  width: 100%;
  height: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageScoreboardLive };
