import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmDeviceAction({ handleClose, action, message }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        confirm device action
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>{message}</ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>{action}</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmDeviceAction };
