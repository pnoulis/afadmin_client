// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Routes, Route } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { LayoutTeamInfo } from "./layout-team-info/LayoutTeamInfo.jsx";
import { PageTeamInfoRoster } from "./page-team-info-roster/PageTeamInfoRoster.jsx";
import { PageTeamInfoStats } from "./page-team-info-stats/PageTeamInfoStats.jsx";
import { loadPackages } from "/src/loaders/index.js";

function RoutesTeamInfo() {
  return (
    <Routes>
      <Route path="/" element={<LayoutTeamInfo />}>
        <Route index element={<PageTeamInfoRoster />} loader={loadPackages} />
        <Route
          path="/stats"
          element={<PageTeamInfoStats />}
          loader={loadPackages}
        />
        <Route
          path="/roster"
          element={<PageTeamInfoRoster loader={loadPackages} />}
        />
      </Route>
    </Routes>
  );
}

export { RoutesTeamInfo };
