// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { MUIScoreboardTable } from "../../../components/tables/mui-scoreboard-table/MUIScoreboardTable.jsx";
import { useRevalidator } from "react-router-dom";
import { useAfmachineSubscription } from "/src/hooks/index.js";

const every6Secs = (function () {
  let tries = 0;
  return (revalidator) => {
    console.log('every 6 seconds');
    if (++tries > 3) {
      tries = 0;
      debug("should revalidate data");
      revalidator.revalidate();
    } else {
      debug("should not revalidate data");
    }
  };
})();

function PageScoreboardLive() {
  const revalidator = useRevalidator();
  const listenerRef = React.createRef(null);

  // useAfmachineSubscription("onScoreboardUpdate", () => {
  //   console.log("onscoreboard update");
  //   every6Secs(revalidator);
  //   // listenerRef.current?.();
  // });

  // React.useEffect(() => {
  //   // listenerRef.current = () => every6Secs(revalidator);
  // }, []);

  return (
    <StyledPageScoreboardLive>
      <AwaitScoreboardTeams>
        {(scoreboard, id) => {
          return <MUIScoreboardTable key={id} teams={scoreboard.teams} />;
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
