import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmDeleteCashier({ handleClose, cashiers }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        Confirm cashier deletion
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        {cashiers.length > 1
          ? `Delete cashiers: ${cashiers.map((c) => <p>{c}</p>)}`
          : `Delete cashier: ${cashiers[0]}`}
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>delete</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmDeleteCashier };
