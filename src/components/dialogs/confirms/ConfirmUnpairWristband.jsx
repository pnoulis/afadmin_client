import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmUnpairPlayerWristband({ player, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>Wristband</ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Unpair {player?.username || "player"}'s wristband?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>unpair</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmUnpairPlayerWristband };
