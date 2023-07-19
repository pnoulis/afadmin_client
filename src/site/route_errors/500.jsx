import * as React from "react";
import { useLocation } from "react-router-dom";
import { LinkDefault } from "/src/components/links/index.js";
import { home } from "/src/links.jsx";

function Route500() {
  const { from, err } = useLocation();
  return (
    <div>
      <p>code: 500</p>
      <p>label: Server Error</p>
      <LinkDefault to={home.path}>{home.label}</LinkDefault>
    </div>
  );
}

export { Route500 };
