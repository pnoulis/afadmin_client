import * as React from "react";
import { App, useAppCtx } from "/src/app/index.js";

function Component() {
  const [someRandomState, setSomeRandomState] = React.useState(2);
  const [someState, setSomeState] = React.useState(1);
  const app = useAppCtx();

  console.log(app);
  return (
    <div>
      <h1>Component</h1>
      <div>
        <button onClick={() => setSomeState(someState + 1)}>
          change local state
        </button>
        <br />
        <button onClick={() => setSomeRandomState(someRandomState + 1)}>
          change random state
        </button>
      </div>
    </div>
  );
}

export default function ScratchApp() {
  return (
    <div>
      <h1>Scratch app</h1>
      <div>
        <App>
          <Component />
        </App>
      </div>
    </div>
  );
}
