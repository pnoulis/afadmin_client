import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadTeam({ params }) {
  const teamName = decodeURI(params.teamId);
  debug(teamName, 'loadTeam');
  return defer({
    team: afmachine.listTeams().then((teams) => {
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === teamName) return teams[i];
      }
      throw new Response("not found", { status: 404 });
    }),
    packages: afmachine.listPackages().then((pkgs) => {
      return [
        {
          type: "time",
          description: "amount of time",
          catalogue: pkgs.filter((pkg) => pkg.type === "time"),
        },
        {
          type: "mission",
          description: "number of missions",
          catalogue: pkgs.filter((pkg) => pkg.type === "mission"),
        },
      ];
    }),
  });
}

export { loadTeam };
