// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { AncestorDimensions } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { PanelGroupParty } from "./PanelGroupParty.jsx";
import {
  useGroupParty,
  GPTeamActionCard,
} from "/src/components/group-party/index.js";
import { GroupPartyTeam } from "/src/components/teams/index.js";

function PageGroupParty() {
  const ctxgp = useGroupParty();
  return (
    <PanelGroupParty onTeamAdd={ctxgp.addTeam}>
      <StyledPageGroupParty id="page-group-party">
        <AncestorDimensions ancestor="#panel-groupParty-main">
          <StyledScrollableArea>
            {ctxgp.gp.teams.map((team) => (
              <GroupPartyTeam
                key={team.name}
                team={team}
                onRemoveGPTeam={ctxgp.rmTeam}
              >
                <GPTeamActionCard />
              </GroupPartyTeam>
            ))}
            {/* <PersistentTeam fill depth={2}> */}
            {/*   <GPTeamActionCard /> */}
            {/* </PersistentTeam> */}
            {/* <PersistentTeam fill depth={2}> */}
            {/*   <GPTeamActionCard /> */}
            {/* </PersistentTeam> */}
            {/* <PersistentTeam fill depth={2}> */}
            {/*   <GPTeamActionCard /> */}
            {/* </PersistentTeam> */}
          </StyledScrollableArea>
        </AncestorDimensions>
      </StyledPageGroupParty>
    </PanelGroupParty>
  );
}

const StyledPageGroupParty = styled("div")``;

const StyledScrollableArea = styled("div")`
  margin: 25px 50px 0 100px;
  padding: 25px 50px 50px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow-y: auto;
  overflow-x: none;
  scroll-behavior: smooth;
  max-height: ${({ $height }) => $height - 50 + "px"};
  row-gap: 40px;
`;

export { PageGroupParty };
