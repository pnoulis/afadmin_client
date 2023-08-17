// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLocation } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Link } from "/src/components/links/index.js";
import { home } from "/src/links.jsx";

function Page408() {
  const { from, err } = useLocation();
  return (
    <div>
      <p>code: 408</p>
      <p>label: Request timeout</p>
      <Link to={home.path}>{home.label}</Link>
    </div>
  );
}

export { Page408 };
