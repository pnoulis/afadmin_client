import * as react from "react";
import styled from "styled-components";
import { ActionCardTeamReference, Team } from "/src/components/teams/index.js";
import { afmachine } from "/src/services/afmachine.js";

const StyledListTeams = styled.li`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 230px;
  gap: 30px;
  justify-content: center;
  padding: 50px 150px;
`;

const StyledTeamContainer = styled(ActionCardTeamReference)`
  min-width: 1000px;
  justify-items: start;
`;

function __createTemporaryTeam(team, options) {
  return afmachine.createTemporaryTeam(team, options);
}
function GroupPartyTeams({ teams, onTeamRemove }) {
  return (
    <StyledListTeams>
      {teams.map((team, i) => (
        <Team team={team} key={i} createTeam={__createTemporaryTeam}>
          <StyledTeamContainer onTeamRemove={onTeamRemove} />
        </Team>
      ))}
    </StyledListTeams>
  );
}

export { GroupPartyTeams };
