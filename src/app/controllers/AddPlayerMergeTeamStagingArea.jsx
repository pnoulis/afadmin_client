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
import styled from "styled-components";
import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";

const StyleConfirmationDialog = styled(ConfirmationDialog)`
  width: 500px;
`;

const StyleConfirmationDialogDescription = styled(
  ConfirmationDialogDescription
)`
  box-sizing: border-box;
  color: var(--primary-medium);
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

function ConfirmUnpairWristband({ username, handleClose }) {
  return (
    <StyleConfirmationDialog
      initialOpen
      onClose={handleClose}
      style={{ wdith: "400px" }}
    >
      <ConfirmationDialogHeading>
        Duplicate wristband colors
      </ConfirmationDialogHeading>
      <StyleConfirmationDialogDescription>
        Duplicate wristband colors in a team not allowed. Unpair wristband of
        player {username} ?
      </StyleConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>unpair</ConfirmationDialogConfirm>
    </StyleConfirmationDialog>
  );
}

export default (appRef) => ({
  addPlayerMergeTeamStagingArea: async (stagingArea, player) =>
    new Promise((resolve, reject) => {
      const { unregisterWristband } = appRef.current;
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
      }

      if (
        stagingArea.find(
          (position) =>
            position?.wristband?.wristbandColor ===
            player?.wristband?.wristbandColor
        )
      ) {
        renderDialog(
          null,
          ConfirmUnpairWristband,
          {
            username: player.username,
          },
          (unpair) => {
            if (!unpair) return;
            unregisterWristband(player)
              .then((unregistered) => {
                resolve(
                  stagingArea.map((pos, i) =>
                    i === vacantIndex ? unregistered : pos
                  )
                );
              })
              .catch((err) => console.log(err));
          }
        );
      } else {
        resolve(
          stagingArea.map((pos, i) => (i === vacantIndex ? player : pos))
        );
      }
    }),
});
