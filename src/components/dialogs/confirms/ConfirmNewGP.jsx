import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmNewGP({ handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        confirm new group party
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        This group party has merged teams, <br />
        discard the group party?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>discard</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmNewGP };
