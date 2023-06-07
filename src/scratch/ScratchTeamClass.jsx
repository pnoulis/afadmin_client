import * as React from "react";
import styled from "styled-components";
import { Team, useAsyncEvent } from "/src/app/index.js";
import { AsyncStates } from "react_utils";
import { fmAgent } from "/src/components/flash_messages/index.js";
import { GroupTeamClass } from "/src/components/teams/index.js";
import { useContextTeam } from "/src/stores/team/index.js";

function RenderTeam() {
  const context = useContextTeam();

  React.useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <div>
      <AsyncStates state={context.state}>team is rendered</AsyncStates>
    </div>
  );
}

function GroupParty() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    if (teams.length > 0) {
      fmAgent.info({ message: "created 5 teams" });
    }
  }, [teams]);

  return (
    <div>
      <h1>group party</h1>
      <div>
        <button
          onClick={() =>
            setTeams(new Array(5).fill(null).map(() => new Team()))
          }
        >
          make 5 teams
        </button>
        <ul>
          {teams.map((team, i) => (
            <GroupTeamClass key={i} groupTeam={team}>
              <li>{team.name}</li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  team.merge
                    .fire()
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                merge team
              </button>
              <RenderTeam />
            </GroupTeamClass>
          ))}
        </ul>
      </div>
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
