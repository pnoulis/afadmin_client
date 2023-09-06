// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitTeams } from "./AwaitTeams.jsx";
import { TableTeams } from "./TableTeams.jsx";

function PageLiveViewIndex() {
  return <AwaitTeams>{(teams) => <TableTeams rows={teams} />}</AwaitTeams>;
}

export { PageLiveViewIndex };
