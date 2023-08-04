import * as React from "react";
import styled from "styled-components";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import {
  StyledInfoCardTeamLayout,
  ActionCardTeamPlayer,
} from "/src/components/teams/index.js";
import { WidgetTrash, WidgetPlus } from "/src/components/widgets/index.js";
import { useContextTeam } from "/src/contexts/index.js";
import { StyledFormTeamName } from "/src/components/forms/index.js";
import { afmachine } from "/src/services/afmachine.js";

function __createPlayer(player, options) {
  return afmachine.createTemporaryPlayer(player, options);
}

function __createWristband(wristband, options) {
  return afmachine.createVerifiableWristband(wristband, options);
}
function ActionCardTeamReference({ className, onTeamRemove, ...props }) {
  const { team, roster, removeTeamPlayer, addTeamPlayer } = useContextTeam();
  return (
    <StyledInfoCardTeamLayout className={className} {...props}>
      <StyledActionCardFormTeamName
        style={{ alignSelf: "end", gridRow: "1 / 2", gridColumn: "1 / 3" }}
      />
      <StyledWidgetContainer
        style={{
          gridRow: "2 / 3",
          gridColumn: "1 / 2",
          justifyContent: "end",
        }}
      >
        <WidgetTrash
          onClick={onTeamRemove.bind(null, team)}
          size="20px"
          tooltipContent="remove team"
        />
      </StyledWidgetContainer>
      <StyledWidgetContainer
        style={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3",
          justifyContent: "start",
        }}
      >
        <WidgetPlus
          onClick={addTeamPlayer}
          size="20px"
          tooltipContent="add player"
        />
      </StyledWidgetContainer>
      {roster.map((player, i) => (
        <Player
          player={player}
          key={player.username + i}
          createPlayer={__createPlayer}
        >
          <Wristband
            wristband={player.wristband}
            createWristband={__createWristband}
          >
            <ActionCardTeamPlayer
              onPlayerRemove={removeTeamPlayer}
              style={{ gridRow: "1 / 3" }}
            />
          </Wristband>
        </Player>
      ))}
    </StyledInfoCardTeamLayout>
  );
}

const StyledActionCardFormTeamName = styled(StyledFormTeamName)`
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
  justify-content: end;
  width: 100%;
  border-radius: 0;
`;

export { ActionCardTeamReference };
