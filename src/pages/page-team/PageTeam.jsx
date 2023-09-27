// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useParams } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitTeam } from "./AwaitTeam.jsx";
import { StubPageTeam } from "./StubPageTeam.jsx";
import { Team } from "./Team.jsx";

function PageTeam() {
  const { teamId } = useParams();
  return (
    <AwaitTeam fallback={<StubPageTeam teamName={teamId} />}>
      {(team) => {
        return <Team team={team} />;
      }}
    </AwaitTeam>
  );
}
export { PageTeam };
