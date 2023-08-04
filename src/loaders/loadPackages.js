import { afmachine } from "afmachine/src/index.js";
import { defer } from "react-router-dom";

function loadPackages() {
  return defer({
    packages: afmachine.listPackages().then((pkgs) => {
      return [
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
      ];
    }),
  });
}

export { loadPackages };
