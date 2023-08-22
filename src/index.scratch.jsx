// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import ScratchUseAfmachineEntity from "/src/scratch/ScratchUseAfmachineEntity.jsx";
import { PlayerInfoCard, Player } from "/src/components/players/index.js";
import {
  WristbandInfoCard,
  Wristband,
} from "/src/components/wristbands/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Player>
        <Wristband>
          <PlayerInfoCard />
        </Wristband>
      </Player>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
