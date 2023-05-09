import * as React from "react";
import { useLoaderData } from "react-router-dom";

function RouteTeam() {
  const players = useLoaderData();
  return <div>route team</div>;
}

export { RouteTeam };
