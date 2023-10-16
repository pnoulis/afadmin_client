// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useApp } from "/src/app/useApp.jsx";
import Button from "@mui/material/Button";

function DeviceActions() {
  const { afmachine } = useApp();
  return (
    <div>
      <Button
        onClick={() => {
          afmachine.listDevices().then(debug).catch(debug);
        }}
        variant="contained"
      >
        list devices
      </Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          afmachine
            .restartDevice({ deviceId: "yolo" })
            .then(debug)
            .catch(debug);
        }}
      >
        restart devices
      </Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          afmachine.wakeupDevice({ deviceId: "yolo" }).then(debug).catch(debug);
        }}
      >
        wakeup devices
      </Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          afmachine
            .shutdownDevice({ deviceId: "yolo" })
            .then(debug)
            .catch(debug);
        }}
      >
        shutdown devices
      </Button>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "*",
    element: <DeviceActions />,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
