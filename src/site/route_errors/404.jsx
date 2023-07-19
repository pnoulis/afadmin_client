import * as React from 'react';
import { useLocation } from "react-router-dom";
import { LinkDefault } from "/src/components/links/index.js";
import { home } from "/src/links.jsx";

function Route404() {
  const { from ,err } = useLocation();
  return (
    <div>
      <p>code: 404</p>
      <p>label: Not Found</p>
      <LinkDefault to={home.path}>{home.label}</LinkDefault>
    </div>
  );
}

export { Route404 };
