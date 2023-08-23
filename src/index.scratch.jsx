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
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  useRegistrationQueue,
} from "/src/components/registration-queue/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { WidgetWristband } from "/src/components/widgets/index.js";
import {
  AlertDuplicatePlayerRegistrationQueue,
  AlertPlayerNoWristbandPairing,
  ConfirmUnpairPlayerWristband,
} from "/src/components/dialogs/index.js";
import { useAfmachineEntity, useAfmachineAction } from "./hooks/index.js";
import { Scheduler } from "/src/services/afmachine/afmachine.js";
import { PopoverAsyncAction } from "./components/async/PopoverAsyncAction.jsx";

const t = afmachine.createPersistentTeam().fill(null, { depth: 2 });

function StatefulAction() {
  return (
    <div>
      <p>stateful action</p>
      <PopoverAsyncAction
        run
        action={() => afmachine.searchPlayer({ searchTerm: "y" })}
      />
    </div>
  );
}
function PageRegistrationWristband() {
  const ctx = useRegistrationQueue(t.roster.get().slice(0, 3), {
    fill: true,
  });
  return <StatefulAction />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRegistrationWristband />,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
