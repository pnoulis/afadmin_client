// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelGroupParty } from "./PanelGroupParty.jsx";
import {
  useGroupParty,
  GPTeamActionCard,
} from "/src/components/group-party/index.js";
import { PersistentTeam } from "/src/components/teams/index.js";

function PageGroupParty() {
  const ctxgp = useGroupParty();
  return (
    <PanelGroupParty>
      <StyledPageGroupParty>
        <StyledScrollableArea>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
          <PersistentTeam fill depth={2}>
            <GPTeamActionCard />
          </PersistentTeam>
        </StyledScrollableArea>
      </StyledPageGroupParty>
    </PanelGroupParty>
  );
}

const StyledPageGroupParty = styled("div")`
  padding: 0 100px;

  ${StyledScrollableArea} {
  }
`;

export { PageGroupParty };
