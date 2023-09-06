// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function afpackage(team, pkg) {
  // createPkg arguments: pkg, team
  return afmachine.createPkg(pkg, team);
}

function usePackage(source, { team = {}, fill = false, depth = 0 }) {
  const { entity: pkg, state } = useAfmachineEntity(
    source,
    afpackage.bind(null, team),
    {
      fill,
      depth,
    },
  );

  return {
    state,
    pkg,
  };
}

export { usePackage };
