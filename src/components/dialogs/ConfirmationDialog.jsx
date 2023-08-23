import * as React from "react";
import { BasicDialog } from "react_utils/dialogs";
import styled from "styled-components";

const DialogContent = styled.div`
  display: grid;
  max-width: 600px;
  min-width: 450px;
  width: max-content;
  min-height: 150px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 50%;
  left: 50%;
  font-family: Saira;
  transform: translate(-50%, -50%);
  grid-template-areas: "heading heading" "description description" "content content" "close confirm";
  box-sizing: border-box;
  z-index: 4;
  row-gap: 15px;
  padding: 25px 35px 25px 35px;
  background: white;
  flex-flow: column nowrap;
  border-radius: var(--br-md);
  border: none;
  box-shadow: var(--sd-9);
`;

const ConfirmationDialogHeading = styled(BasicDialog.Heading)`
  grid-area: heading;
  justify-self: center;
  align-self: center;
  box-sizing: border-box;
  font-weight: 550;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
`;

const ConfirmationDialogDescription = styled(BasicDialog.Description)`
  grid-area: description;
  justify-self: center;
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  font-weight: 650;
  color: var(--primary-base);
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 10px;
  word-spacing: 3px;
  text-align: center;
`;

const ConfirmationDialogClose = styled(BasicDialog.Close)`
  grid-area: close;
  justify-self: center;
  align-self: end;
  box-sizing: border-box;
  min-width: 110px;
  height: 40px;
  cursor: pointer;
  background-color: var(--primary-medium);
  font-weight: 650;
  border-radius: var(--br-nl);
  color: white;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;

const ConfirmationDialogConfirm = styled(BasicDialog.Confirm)`
  grid-area: confirm;
  justify-self: center;
  align-self: end;
  box-sizing: border-box;
  padding: 8px;
  min-width: 110px;
  font-weight: 650;
  height: 40px;
  cursor: pointer;
  background-color: var(--primary-medium);
  border-radius: var(--br-nl);
  color: white;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;

function ConfirmationDialog({
  className,
  children,
  onClose,
  initialOpen,
  open,
  onOpenChange,
}) {
  return (
    <BasicDialog.Provider
      initialOpen={initialOpen}
      onClose={onClose}
      open={open}
      onOpenChange={onOpenChange}
    >
      <BasicDialog.Content>
        <DialogContent className={className}>{children}</DialogContent>
      </BasicDialog.Content>
    </BasicDialog.Provider>
  );
}

export {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
};
