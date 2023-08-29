// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FormTeamName } from "/src/components/teams/index.js";
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  StyledListPlayers,
  StyledPlayerActionCard,
} from "/src/components/registration-queue/index.js";
import { useContextTeam } from "/src/contexts/index.js";
import {
  WidgetTrash,
  WidgetPlus,
  StyleWidgetPlus,
  StyleWidgetTrash,
} from "/src/components/widgets/index.js";

function GPTeamActionCard() {
  const ctxTeam = useContextTeam();
  return (
    <StyledGPTeamActionCard>
      <StyledFormTeamName style={{ gridArea: "team_name" }} />
      <StyledToolbar>
        <WidgetPlus tooltipContent="add player" />
        <WidgetTrash tooltipContent="remove team" />
      </StyledToolbar>
      <ContextProvideRegistrationQueue
        ctx={{
          addQueue: ctxTeam.addPlayer,
          rmQueue: ctxTeam.rmPlayer,
          queue: ctxTeam.roster,
        }}
      >
        <StyledGPRegistrationQueue style={{ gridArea: "registration_queue" }} />
      </ContextProvideRegistrationQueue>
    </StyledGPTeamActionCard>
  );
}
const StyledGPTeamActionCard = styled("article")`
  border-radius: var(--br-lg);
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: minmax(300px, 400px) 1fr;
  grid-template-areas: "team_name registration_queue" "toolbar registration_queue";
  background-color: var(--grey-light);
  padding: 25px 30px;
  column-gap: 50px;
  align-items: end;
`;
const StyledFormTeamName = styled(FormTeamName)`
  min-width: auto;
  & input {
    background-color: white;
  }
`;
const StyledGPRegistrationQueue = styled(RegistrationQueue)`
  background-image: none;
  background-color: transparent;
  max-width: 100%;
  box-shadow: none;

  ${StyledListPlayers} {
    display: flex;
    flex-flow: row nowrap;
    max-width: 100%;
    padding: 0;
    gap: 0 10;
  }

  ${StyledPlayerActionCard} {
    height: 150px;
    aspect-ratio: initial;
    padding: 0;
  }
`;
const StyledToolbar = styled("div")`
  grid-area: toolbar;
  display: flex;
  justify-content: center;
  gap: 30px;

  ${StyleWidgetPlus} {
    padding: 4px;
    width: 20px;
    height: 20px;
    background-color: var(--primary-base);
    svg {
      fill: white;
    }
  }

  ${StyleWidgetTrash} {
    padding: 4px;
    width: 20px;
    height: 20px;
    background-color: var(--primary-base);
    svg {
      fill: white;
    }
  }
`;

export { GPTeamActionCard };
