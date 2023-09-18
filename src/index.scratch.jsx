// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { loadTeams } from "/src/loaders/index.js";
import { AwaitTeams } from "/src/pages/page-live-view/page-live-view-index/AwaitTeams.jsx";
import { randomInteger } from "js_utils/misc";
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TeamHead,
  TeamRow,
  TableLiveViewRow,
  ContextProvideTable,
  useTable,
  getComparator,
  stableSort,
  TableTeamsHeader,
  TableLiveViewTeams,
} from "/src/components/tables/index.js";
import { isObject } from "js_utils/misc";
import { MUILiveViewTable } from "./components/tables/mui-liveview-table/MUILiveViewTable.jsx";

const PageContainer = styled("div")`
width: 800px;
  overflow: scroll;
  display: flex;
`;
function PageTable({ teams }) {
  return (
    <PageContainer>
      <MUILiveViewTable teams={teams} />
    </PageContainer>
  );
}

// function PageTable({ teams = [] }) {
//   const newTeams = React.useMemo(() => {
//     const nteam = new Array(teams.length);
//     for (let i = 0; i < teams.length; i++) {
//       teams[i].points = randomInteger();
//       for (let y = 0; y < teams[i].packages.length; y++) {
//         if (
//           (teams[i].packages[y].state?.name ?? teams[i].packages[y].state) ===
//           "playing"
//         ) {
//           teams[i].activePackage = teams[i].packages[y];
//         }
//       }
//       continue;
//       // nteam[i] = {};
//       // for (const [k, v] of Object.entries(teamDataKeys)) {
//       //   nteam[i][k] = v.gval?.(teams[i]) ?? teams[i][k];
//       // }
//     }
//     return teams;
//   }, [teams.length]);
//   console.log(teams);
//   console.log(newTeams);

//   const ctxTable = useTable({
//     data: newTeams,
//     sort: stableSort,
//     getComparator,
//   });
//   return (
//     <ContextProvideTable ctx={ctxTable}>
//       <table>
//         <TableTeamsHeader />
//         {/* <TeamHead include={["name", "state", "points", "roster"]} /> */}
//         <TableBody>
//           {ctxTable.sortedData.map((team) => (
//             <TableLiveViewRow key={team.name} row={team} />
//           ))}
//         </TableBody>
//       </table>
//     </ContextProvideTable>
//   );
// }

const router = createBrowserRouter([
  {
    loader: loadTeams,
    path: "*",
    element: <AwaitTeams>{(teams) => <PageTable teams={teams} />}</AwaitTeams>,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
