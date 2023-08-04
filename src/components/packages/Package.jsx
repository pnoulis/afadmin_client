import * as React from "react";
import { ContextProvidePackage } from "/src/contexts/index.js";
import { usePackage } from "./usePackage.jsx";

function Package({ pkg, children, ...options }) {
  const ctx = usePackage(pkg, options);
  return <ContextProvidePackage ctx={ctx}>{children}</ContextProvidePackage>;
}

export { Package };
