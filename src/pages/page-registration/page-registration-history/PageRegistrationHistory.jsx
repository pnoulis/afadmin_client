// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useRevalidator } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitPlayers } from "./AwaitPlayers.jsx";
import { MUIPlayersTable } from "../../../components/tables/mui-players-table/MUIPlayersTable.jsx";
import { useAfmachineSubscription } from "/src/hooks/index.js";

function PageRegistrationHistory() {
  const revalidator = useRevalidator();

  useAfmachineSubscription("onRegisterPlayer", () => revalidator.revalidate());

  return (
    <StyledPageRegistrationHistory>
      <AwaitPlayers>
        {(players) => {
          return <MUIPlayersTable key={players.length} players={players} />;
        }}
      </AwaitPlayers>
    </StyledPageRegistrationHistory>
  );
}

const StyledPageRegistrationHistory = styled("div")`
  width: 100%;
  height: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageRegistrationHistory };
