import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
} from "/src/components/dialogs/index.js";

function ConfirmActivatePkg({ pkgType, pkgName, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        confirm package activation
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Activate {pkgType} package: {pkgName}?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>activate</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

export { ConfirmActivatePkg };
