import * as React from "react";
import { ProvideAppCtx } from "./Context.jsx";
import { useApp } from "./useApp.jsx";
import { Site as DesktopSite } from "/src/site/Site.jsx";

function App({ children }) {
  const app = useApp();

  return <ProvideAppCtx value={app}>{children}</ProvideAppCtx>;
}

function Site() {
  return (
    <App>
      <DesktopSite />
    </App>
  );
}

export { App, Site };
