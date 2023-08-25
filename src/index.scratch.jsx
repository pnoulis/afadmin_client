// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FormTeamName } from "/src/components/teams/FormTeamName.jsx";

function PageMerge() {
  return (
    <div>
      <FormTeamName legend="select name" />
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
