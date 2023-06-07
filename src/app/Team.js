import { TEAM_SCHEMA } from "agent_factory.shared/schemas.js";
import { AsyncEvent } from "./AsyncEvent.js";
import { generateRandomName } from "js_utils";

class Team {
  constructor() {
    Object.assign(this, window.structuredClone(TEAM_SCHEMA));
    this.name ||= generateRandomName();

    this.merge = new AsyncEvent(
      () =>
        new Promise((resolve, reject) => {
          resolve(this.name);
        }),
      {
        fireDelay: 3000,
      }
    );
  }
}

/*
  ACTIONS
 */

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
  EVENT PROPS
 */
Team.prototype.onClickTeamPlayerAdd = function onClickTeamPlayerAdd(player) {
  return {
    onClick: (e) => {
      e.preventDefault();
      this.handleTeamPlayerAdd(player);
    },
  };
};

Team.prototype.onClickTeamPlayerRemove = function onClickTeamPlayerRemove(
  player
) {
  return {
    onClick: (e) => {
      e.preventDefault();
      this.handleTeamPlayerRemove(player);
    },
  };
};

Team.prototype.onSubmitTeamMerge = function onSubmitTeamMerge() {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      this.handleSubmitTeamMerge();
    },
    onClick: (e) => {
      e.preventDefault();
      this.handleTeamMerge();
    },
  };
};

export { Team };
