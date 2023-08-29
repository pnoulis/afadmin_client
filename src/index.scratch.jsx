// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PersistentPlayer } from "/src/components/players/index.js";
import { PlayerActionCard } from "/src/components/registration-queue/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { GroupParty } from "/src/components/group-party/index.js";

function PageMerge() {
  return (
    <div>
      <GroupParty fill depth={3}/>
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
