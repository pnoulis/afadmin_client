import * as React from "react";
import { ContextProvidePackage } from "/src/contexts/index.js";
import { usePackage } from "./usePackage.jsx";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine.js";
import { InfoCardPackageReference } from "./InfoCardPackageReference.jsx";

function Package({ pkg, children, ...options }) {
  const ctx = usePackage(pkg, options);
  return <ContextProvidePackage ctx={ctx}>{children}</ContextProvidePackage>;
}

function Packageless({ pkg, team, createPkg, children, ...options }) {
  createPkg ||= function (source, __options) {
    return afmachine.createPkg(source, team, __options);
  };
  const { entity: ctx, state, id, create } = useAfmachineEntity(pkg, createPkg);

  return (
    <ContextProvidePackage ctx={{ pkg: ctx }}>
      {ctx instanceof afmachine.Package ? children : <></>}
    </ContextProvidePackage>
  );
}

export { Package, Packageless };
