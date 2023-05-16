import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";
import styled from "styled-components";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";

const StyleAlertDialog = styled(AlertDialog)`
  width: 600px;
`;

function AlertDuplicateWristbandColor({
  teamName,
  duplicateColor,
  handleClose,
}) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Discarding scanned wristband</AlertDialogHeading>
      <AlertDialogDescription>
        A member of {teamName} is already paired with a {duplicateColor}{" "}
        wristband.
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

export default (appRef) => ({
  ensureUniqueWristbandColor: async (team, wristband) =>
    new Promise((resolve, reject) => {
      const { wristbandColor } = wristband;
      const isUnique = team.roster
        .filter((player) => player?.wristband?.wristbandColor != null)
        .every((player) => player.wristband.wristbandColor !== wristbandColor);

      if (!isUnique) {
        renderDialog(null, AlertDuplicateWristbandColor, {
          teamName: team?.name,
          duplicateColor: mapWristbandColor("colorCode", wristbandColor),
        });
        reject();
      } else {
        resolve(wristband);
      }
    }),
});
