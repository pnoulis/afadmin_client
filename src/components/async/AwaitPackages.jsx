// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { afmachine } from "/src/services/afmachine/afmachine.js";

function Resolved() {
  return <p>it was resolved</p>;
}

const Yolo = React.lazy(() =>
  Promise.resolve(React.createElement("p", null, "yolo")),
);
const Pkgs = React.lazy(() =>
  afmachine
    .listPackages()
    .then((pkgs) => [
      {
        type: "time",
        description: "amount of time",
        catalogue: pkgs.filter((pkg) => pkg.type === "time"),
      },
      {
        type: "mission",
        description: "number of missions",
        catalogue: pkgs.filter((pkg) => pkg.type === "mission"),
      },
    ])
    .then(() => <Resolved />),
);

function AwaitPackages({ children }) {
  return <Yolo />;
}

export { AwaitPackages };
