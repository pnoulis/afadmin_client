import { teamDataMap } from "/src/components/tables/teamDataMap.js";

function parseTeams(teams) {
  const ln = teams.length;
  const parsed = new Array(ln);

  for (let i = 0; i < ln; i++) {
    // Find out the active package
    for (let y = 0; y < teams[i].packages.length; y++) {
      if (
        (teams[i].packages[y].state?.name ?? teams[i].packages[y].state) ===
        "playing"
      ) {
        teams[i].activePackage = teams[i].packages[y];
      }
    }

    parsed[i] = {
      activePackage: teams[i].activePackage,
    };
    // parse team[i] data for table
    for (const [k, v] of Object.entries(teamDataMap)) {
      parsed[i][k] = v.gval?.(teams[i]) ?? teams[i][k];
      parsed[i].index = i + 1;
    }
  }
  debug(teams, parsed, "parse teams");
  return parsed;
}

export { parseTeams };
