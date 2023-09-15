// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { loadTeams } from "/src/loaders/index.js";
import { AwaitTeams } from "/src/pages/page-live-view/page-live-view-index/AwaitTeams.jsx";
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TeamHead,
  TeamRow,
  TableLiveViewHeader,
  TableLiveViewRow,
} from "/src/components/tables/index.js";

function PageTable({ teams = [] }) {
  console.log(teams);
  return (
    <Table>
      <TableLiveViewHeader />
      {/* <TeamHead include={["name", "state", "points", "roster"]} /> */}
      <TableBody>
        {teams.map((team) => (
          <TableLiveViewRow key={team.name} row={team} />
        ))}
      </TableBody>
    </Table>
  );
}

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
