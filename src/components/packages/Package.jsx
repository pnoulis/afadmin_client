// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvidePackage } from "/src/contexts/index.js";
import { usePackage } from "./usePackage.jsx";

function Package({ pkg, children, fill, depth }) {
  const ctx = usePackage(null, pkg, { fill, depth });
  return <ContextProvidePackage ctx={ctx}>{children}</ContextProvidePackage>;
}

export { Package };
