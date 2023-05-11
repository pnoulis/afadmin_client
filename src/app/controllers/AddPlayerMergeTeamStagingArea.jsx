/*
  A player may be added to the staging area if these conditions
  are met:

  1. The player is not a member of a team
     It follows that the player may not be currently playing

  2. The staging area has vacant positions.
     The number of available positions is defined by the
     MAX_TEAM_SIZE constant.

  3. The player is not already in the staging area.

 */
import { fmAgent } from "/src/components/flash_messages/index.js";

export default (appRef) => ({
  addPlayerMergeTeamStagingArea: async (stagingArea, player) =>
    new Promise((resolve, reject) => {
      // check player is not already a member of a team
      if (player.wristbandMerged) {
        return fmAgent.warn({
          message: `${player?.username} is already member of a team`,
        });
      }

      if (
        stagingArea.find((position) => position?.username === player.username)
      ) {
        return fmAgent.warn({
          message: `${player?.username} has already been selected`,
        });
      }

      const vacant = null;
      const vacantIndex = stagingArea.findIndex(
        (position) => position == vacant
      );
      // team is full
      if (vacantIndex === -1) {
        fmAgent.warn({
          message: "Team is full",
        });
      } else {
        resolve(
          stagingArea.map((position, i) =>
            i === vacantIndex ? player : position
          )
        );
      }
    }),
});
