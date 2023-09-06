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
import { VerifiableWristband } from "/src/components/wristbands/VerifiableWristband.jsx";
import { TemporaryPlayer } from "/src/components/players/index.js";
import { AwaitPackages } from "/src/pages/page-team/AwaitPackages.jsx";
import { loadPackages } from "/src/loaders/index.js";

function PageMerge() {
  return (
    <div>
      <AwaitPackages>
        {(pkgs) => (
          <div>
            {pkgs.map((pkg) => (
              <p>yolo</p>
            ))}
          </div>
        )}
      </AwaitPackages>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: loadPackages,
    element: <PageMerge />,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
