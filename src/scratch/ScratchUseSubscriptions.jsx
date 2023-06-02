import * as React from "react";
import { useSubscriptions } from "/src/hooks/useSubscriptions.jsx";
import { StoreProvideApp, useContextApp } from "/src/app/index.js";

function Subs() {
  const appContext = useContextApp();
  const [a, setA] = React.useState("");
  const [subs, setSubs] = React.useState(() => ["yolo"]);
  const [wristbandRegistered] = useSubscriptions("wristbandRegistration");

  React.useEffect(() => {
    alert("SOMETHING CHANGED");
    console.log(appContext);
  }, [appContext.searchPlayer]);

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        style={{ display: "block" }}
      >
        sets irrelevant
      </button>
      <button
        onClick={() => setSubs(["wristbandRegistration"])}
        style={{ display: "block" }}
      >
        sets subscriptions
      </button>
    </div>
  );
}

export default function ScratchUseSubscriptions() {
  return (
    <StoreProvideApp>
      <div>
        <h1>scratch use subscriptions</h1>
      </div>
      <div>
        <Subs />
      </div>
    </StoreProvideApp>
  );
}
