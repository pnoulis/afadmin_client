import * as React from "react";
import styled from "styled-components";
import { alertDialog } from "react_utils/dialogs";

const AlertDialogContent = styled.div`
  width: max-content;
  max-width: 600px;
  min-width: 450px;
  min-height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  z-index: 4;
  padding: 25px 35px 25px 35px;
  background: white;
  font-family: Saira;
  flex-flow: column nowrap;
  border-radius: var(--br-md);
  border: none;
  box-shadow: var(--sd-9);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const AlertDialogHeading = styled(alertDialog.Heading)`
  box-sizing: border-box;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  color: black;
  font-weight: 550;
`;
const AlertDialogDescription = styled(alertDialog.Description)`
  color: var(--primary-base);
  box-sizing: border-box;
  font-size: var(--tx-md);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  margin-top: 30px;
  text-align: center;
`;

function AlertDialog({
  initialOpen = false,
  open,
  onOpenChange,
  onClose,
  children,
  className,
  ...props
}) {
  return (
    <alertDialog.Provider
      initialOpen={initialOpen}
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
    >
      <alertDialog.Dialog>
        <AlertDialogContent className={className} {...props}>
          {children}
        </AlertDialogContent>
      </alertDialog.Dialog>
    </alertDialog.Provider>
  );
}

export { AlertDialog, AlertDialogHeading, AlertDialogDescription };
