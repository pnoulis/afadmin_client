import * as React from "react";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { TablePlayers } from "./TablePlayers.jsx";

const StyleRouteHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RouteHistory() {
  const players = useLoaderData();
  return (
    <StyleRouteHistory>
      <TablePlayers rows={players} />
    </StyleRouteHistory>
  );
}

export { RouteHistory };
