import { TEAM_SCHEMA } from "agent_factory.shared/schemas.js";
import { AsyncEvent } from "./AsyncEvent.js";
import { generateRandomName } from "js_utils";

class Team {
  constructor() {
    Object.assign(this, window.structuredClone(TEAM_SCHEMA));
    this.name ||= generateRandomName();

    this.actions = {
      mergeTeam: new AsyncEvent(
        (teamName, roster) =>
          new Promise((resolve, reject) => {
            resolve(teamName);
          })
      ),
    };
  }
}

/*
  ACTIONS
 */
Team.prototype.mergeTeam = function mergeTeam() {
  return this.actions.mergeTeam.fire(this.name, this.currentRoster.players);
};

/*
  EVENT HANDLERS
 */
Team.prototype.handleTeamPlayerAdd = function handleTeamPlayerAdd(
  player,
  e,
  cb
) {
  alert("add player");
  console.log("player");
};

Team.prototype.handleSubmitTeamMerge = function handleSubmitTeamMerge(e, cb) {
  alert("submit team merge");
};

/*
  EVENTS
 */
Team.prototype.onClickTeamPlayerAdd = function onClickTeamPlayerAdd(
  player,
  cb
) {
  return {
    onClick: (e) => this.handleTeamPlayerAdd(player, e, cb),
  };
};

Team.prototype.onSubmitTeamMerge = function onSubmitTeamMerge(cb) {
  return {
    onSubmit: (e) => this.handleTeamMerge(e, cb),
    onClick: (e) => this.handleTeamMerge(e, cb),
  };
};

export { Team };
