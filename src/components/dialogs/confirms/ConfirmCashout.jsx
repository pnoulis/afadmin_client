import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmCashout({ cashierName, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>confirm cashout</ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        {cashierName}, do you want to cashout?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>cashout</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmCashout };
