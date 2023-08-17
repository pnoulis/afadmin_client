// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideApp } from "/src/contexts/index.js";

function App({ children }) {
  const ctx = useApp();
  return <ContextProvideApp ctx={ctx}>{children}</ContextProvideApp>;
}

export { App };
