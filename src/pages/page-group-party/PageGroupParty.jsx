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
import { FormGroupPartySize } from "./FormGroupPartySize.jsx";

function PageGroupParty() {
  const ctxgp = useGroupParty();

  React.useEffect(() => {
    if (ctxgp.gp.teams.length === 0) {
      document.getElementById("size")?.focus();
    }
  }, [ctxgp]);

  return (
    <PanelGroupParty
      onTeamAdd={ctxgp.addTeam}
      onNewGP={ctxgp.newGP}
      onDistribute={ctxgp.distributePlayers}
    >
      <StyledPageGroupParty id="page-group-party">
        {ctxgp.gp.teams.length >= 1 ? (
          <AncestorDimensions ancestor="#panel-groupParty-main">
            <StyledScrollableArea>
              {ctxgp.gp.teams.map((team, i) => (
                /* <p> */
                /*   {team.name}{" "} */
                /*   <button onClick={() => ctxgp.rmTeam(team)}> */
                /*     remove team */
                /*   </button> */
                /* </p> */
                <GroupPartyTeam
                  key={i}
                  team={team}
                  onRemoveGPTeam={ctxgp.rmTeam}
                >
                  <GPTeamActionCard />
                </GroupPartyTeam>
              ))}
            </StyledScrollableArea>
          </AncestorDimensions>
        ) : (
          <FormGroupPartySize
            onSubmit={ctxgp.setGPSize}
            style={{ marginTop: "200px" }}
          />
        )}
      </StyledPageGroupParty>
    </PanelGroupParty>
  );
}

const StyledPageGroupParty = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const StyledScrollableArea = styled("div")`
  height: 100%;
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
