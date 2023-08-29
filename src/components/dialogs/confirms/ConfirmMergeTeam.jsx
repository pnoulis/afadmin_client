import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmMergeTeam({ teamName, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>confirm team merge</ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Merge team {teamName} ?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>merge</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmMergeTeam };
