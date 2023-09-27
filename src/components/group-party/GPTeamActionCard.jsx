// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FormTeamName } from "/src/components/teams/index.js";
import { isObject } from "js_utils/misc";
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  StyledListPlayers,
  StyledPlayerActionCard,
  StyledWidgetTrash,
  PlayerActionCard,
} from "/src/components/registration-queue/index.js";
import { useContextTeam } from "/src/contexts/index.js";
import {
  WidgetTrash,
  WidgetPlus,
  StyleWidgetPlus,
  StyleWidgetTrash,
} from "/src/components/widgets/index.js";
import { TemporaryPlayer } from "/src/components/players/index.js";

function GPTeamActionCard({ failedMerge, className, style }) {
  const ctxTeam = useContextTeam();

  return (
    <StyledGPTeamActionCard className={className} style={style}>
      <StyledFormTeamName
        failedMerge={failedMerge}
        onChange={ctxTeam.changeTeamName}
        fields={{
          teamName: isObject(ctxTeam.team.name) ? "" : ctxTeam.team.name,
        }}
        style={{ gridArea: "team_name" }}
      />
      <StyledToolbar>
        <WidgetPlus onClick={ctxTeam.addPlayer} tooltipContent="add player" />
        <WidgetTrash onClick={ctxTeam.rmGPTeam} tooltipContent="remove team" />
      </StyledToolbar>
      <ContextProvideRegistrationQueue
        ctx={{
          rmQueue: ctxTeam.rmPlayer,
          queue: ctxTeam.roster,
        }}
      >
        <StyledGPRegistrationQueue
          style={{ gridArea: "registration_queue" }}
          renderPlayer={(props) => (
            <TemporaryPlayer {...props}>
              <PlayerActionCard player={props.player} />
            </TemporaryPlayer>
          )}
        />
      </ContextProvideRegistrationQueue>
    </StyledGPTeamActionCard>
  );
}
const StyledGPTeamActionCard = styled("article")`
  height: 100%;
  border-radius: var(--br-lg);
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: minmax(300px, 400px) 1fr;
  grid-template-areas: "team_name registration_queue" "toolbar registration_queue";
  background-color: var(--grey-light);
  padding: 25px 30px;
  column-gap: 50px;
  align-items: end;
  width: max-content;
`;
const StyledFormTeamName = styled(FormTeamName)`
  min-width: auto;
  color: ${({ failedMerge }) => (failedMerge ? "white" : "black")};
  & input {
    background-color: ${({ failedMerge }) =>
      failedMerge ? "var(--error-light)" : "white"};
  }
`;
const StyledGPRegistrationQueue = styled(RegistrationQueue)`
  background-image: none;
  background-color: transparent;
  margin: auto;
  max-width: 100%;
  width: 820px;
  box-shadow: none;

  ${StyledListPlayers} {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: start;
    max-width: 100%;
    padding: 0;
  }

  ${StyledPlayerActionCard} {
    height: 150px;
    width: 120px;
    aspect-ratio: initial;
    padding: 0;
  }

  ${StyledWidgetTrash} {
    padding: 4px;
    width: 28px;
    height: 28px;
    background-color: var(--grey-strong);
  }
`;
const StyledToolbar = styled("div")`
  grid-area: toolbar;
  display: flex;
  justify-content: center;
  gap: 30px;

  ${StyleWidgetPlus} {
    padding: 4px;
    width: 30px;
    height: 30px;
    background-color: var(--primary-base);
    svg {
      fill: white;
    }
  }

  ${StyleWidgetTrash} {
    padding: 4px;
    width: 30px;
    height: 30px;
    background-color: var(--primary-base);
    svg {
      fill: white;
    }
  }
`;

export { GPTeamActionCard };
