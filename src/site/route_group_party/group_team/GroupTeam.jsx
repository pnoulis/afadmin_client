import * as React from "react";
import styled from "styled-components";
import { useStoreGroupTeam } from "/src/stores/group_team/index.js";
import { ContextProvideTeam } from "/src/stores/team/index.js";
import { FormTeamName } from "./FormTeamName.jsx";
import { ListPlayers } from "./ListPlayers.jsx";
import { WidgetPlayer } from "./WidgetPlayer.jsx";
import { ListTeamWidgets } from "./ListTeamWidgets.jsx";
import { WidgetTeamPlayerAdd } from "/src/components/teams/widgets/index.js";
import { RemoteDataStates, Svg } from "react_utils";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function GroupTeam({ groupTeam: config }) {
  const groupTeam = useStoreGroupTeam(config);
  const { mergeTeamStates, onSubmitTeamMerge } = groupTeam;
  return (
    <ContextProvideTeam useSchema team={groupTeam}>
      <StyleGroupTeam>
        <RemoteDataStates
          context={mergeTeamStates}
          RenderPending={<StyleMoonLoader />}
          RenderSuccess={
            <StyleSuccessIcon>
              <SuccessIcon />
            </StyleSuccessIcon>
          }
          RenderError={
            <StyleFailIcon>
              <FailIcon />
            </StyleFailIcon>
          }
        >
          <FormTeamName style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }} />
          <ListTeamWidgets style={{ gridColumn: " 1 / 2", gridRow: "2 / 3" }}>
            <WidgetTeamPlayerAdd />
            <div {...onSubmitTeamMerge()}>start merging</div>
          </ListTeamWidgets>
          <ListPlayers style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>
            {groupTeam.currentRoster.players.map((seat, i) => (
              <WidgetPlayer
                key={`${seat.username}_${i}`}
                player={seat}
                index={i + 1}
              />
            ))}
          </ListPlayers>
        </RemoteDataStates>
      </StyleGroupTeam>
    </ContextProvideTeam>
  );
}

const StyleGroupTeam = styled.article`
  background-color: var(--grey-light);
  border-radius: var(--br-lg);
  padding: 25px;
  box-shadow: var(--sd-7);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content 1fr;
  grid-template-areas: "teamName roster" "toolbar roster";
  gap: 20px;
`;

/* --------------- REMOTE DATA STATES --------------- */
const StyleSuccessIcon = styled(Svg)`
  fill: var(--success-medium);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

const StyleFailIcon = styled(Svg)`
  fill: var(--error-base);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

const StyleMoonLoader = () => (
  <MoonLoader loading color="var(--info-strong)" size={40} />
);

export { GroupTeam };
