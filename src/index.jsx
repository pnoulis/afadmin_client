import * as React from "react";
import * as ReactDOM from "react-dom/client";
import routes from "./routes2.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ENVIRONMENT } from "agent_factory.shared/config.js";
// import { Scratch } from './scratch/Scratch.jsx';

// ReactDOM.createRoot(document.getElementById("app-react-root")).render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter(routes, {
        basename: ENVIRONMENT.BASENAME,
      })}
    />
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById("app-react-root")).render(
//   <React.StrictMode>
//     <Scratch/>
//   </React.StrictMode>,
// );
