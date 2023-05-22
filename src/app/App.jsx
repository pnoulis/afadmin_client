import * as React from "react";
import { Outlet } from "react-router-dom";
import { Authorize } from "/src/components/auth/index.js";
import { RouteLogin } from "/src/site/route_login/RouteLogin.jsx";

function App() {
  return (
    <>
      <Authorize
        renderProps={(authorized) => (authorized ? <Outlet /> : <RouteLogin />)}
      />
    </>
  );
}

export { App };
