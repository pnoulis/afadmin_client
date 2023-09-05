import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmMergeGP({ handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        confirm group party merge
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Merge group party?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>merge</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmMergeGP };
