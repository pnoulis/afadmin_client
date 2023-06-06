import * as React from "react";
import styled from "styled-components";
import { Team } from "/src/app/Team.js";
import { AsyncStates } from "react_utils";
import { StoreProvideTeamClass } from "/src/stores/team/index.js";

function GroupParty() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    if (teams.length > 0) {
      console.log(teams);
    }
  }, [teams, setTeams]);

  return (
    <div>
      <button
        onClick={() => {
          setTeams(new Array(5).fill(null).map(() => new Team()));
        }}
      >
        make 5 teams
      </button>
      <h1>group party</h1>
      <ul>
        {teams.map((team, i) => (
          <StoreProvideTeamClass key={i} team={team}>
            <li>
              <h1>{team.name}</h1>
              <button
                onClick={() => {
                  console.log(team);
                  team
                    .mergeTeam()
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                }}
              >
                merge team
              </button>
              <AsyncStates state={team.actions.mergeTeam.getState()}>
                <div>team is rendered</div>
              </AsyncStates>
            </li>
          </StoreProvideTeamClass>
        ))}
      </ul>
    </div>
  );
}
export default function ScratchTeamClass() {
  return (
    <div>
      <h1>scratch team class</h1>
      <div>
        <GroupParty />
      </div>
    </div>
  );
}
