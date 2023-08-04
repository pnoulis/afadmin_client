import * as React from "react";
import styled from "styled-components";
import {
  Player,
  ActionCardPlayerReference,
} from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import {
  useTeam,
  Team,
  StyledInfoCardTeamLayout,
  ActionCardTeamPlayer,
  ActionCardTeamReference,
} from "/src/components/teams/index.js";
import { WidgetTrash, WidgetPlus } from "/src/components/widgets/index.js";
import { ContextProvideTeam, useContextTeam } from "/src/contexts/index.js";
import { afmachine } from "/src/services/afmachine.js";
import { smallid } from "js_utils/uuid";
import { StyledFormTeamName } from "/src/components/forms/index.js";

const StyledInfoCardFormTeamName = styled(StyledFormTeamName)`
  width: 350px;
  background-color: white;
  border-radius: var(--br-lg);

  #form-teamName-label {
    display: none;
  }

  .input {
    border: none;
    font-family: NoirPro-SemiBold;
  }
`;

const StyledWidgetContainer = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
  justify-content: end;
  border-radius: 0;
`;

function PP({ player, className, ...props }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <ActionCardTeamPlayer className={className} {...props} />
      </Wristband>
    </Player>
  );
}

function SomeComponent() {
  const ctx = useContextTeam();
  console.log(ctx);

  return (
    <StyledInfoCardTeamLayout>
      <StyledInfoCardFormTeamName
        fields={{ teamName: ctx.team.name }}
        style={{ alignSelf: "end", gridRow: "1 / 2", gridColumn: "1 / 3" }}
      />
      <StyledWidgetContainer
        style={{
          marginRight: "30px",
          gridRow: "2 / 3",
          gridColumn: "1 / 2",
          justifyContent: "end",
        }}
      >
        <WidgetTrash size="20px" tooltipContent="remove team" />
      </StyledWidgetContainer>
      <StyledWidgetContainer
        style={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3",
          justifyContent: "start",
        }}
      >
        <WidgetPlus size="20px" tooltipContent="add player" />
      </StyledWidgetContainer>
      {ctx.roster.map((player, i) => (
        <PP key={i} player={player} style={{ gridRow: "1 / 3" }} />
      ))}
    </StyledInfoCardTeamLayout>
  );
}

export default function ScratchTeam() {
  return (
    <div>
      <h1>scratch team</h1>
      <div>
        <Team fill>
          <ActionCardTeamReference />
        </Team>
      </div>
    </div>
  );
}
