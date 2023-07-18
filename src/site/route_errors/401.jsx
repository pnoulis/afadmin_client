import * as React from 'react';
import { LinkDefault } from "/src/components/links/index.js";
import { useLocation } from "react-router-dom";
import { home } from "/src/links.jsx";

function Route401() {
  const location = useLocation();
  return (
    <div>
      <p>code: 401</p>
      <p>label: Unauthorized</p>
      <LinkDefault to={home.path}>{home.label}</LinkDefault>
    </div>
  );
}

export { Route401 };
