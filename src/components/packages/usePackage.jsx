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

function usePackage(team, source, { fill = false, depth = 0 } = {}) {
  const {
    entity: pkg,
    state,
    changeSource,
    createEntity,
  } = useAfmachineEntity(source, afpackage.bind(null, team), {
    fill,
    depth,
  });

  return {
    state,
    pkg,
    changeSource,
    createPkg: createEntity,
  };
}

export { usePackage };
