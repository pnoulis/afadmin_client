// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { PersistentPlayer } from "/src/components/players/index.js";
import { PlayerActionCard } from "/src/components/registration-queue/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { GroupParty } from "/src/components/group-party/index.js";
import { FormDistributionRatio } from "/src/components/group-party/index.js";
import { InputDialogDistributionRatio } from "/src/components/dialogs/index.js";
import { ReactComponent as DistributeIcon } from "agent_factory.shared/ui/new-icons/merge-icon-2.svg";

function PageMerge() {
  return (
    <div>
      <Svg>
        <DistributeIcon/>
      </Svg>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageMerge />,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
