import * as React from "react";
import { InputDialog as Dialog } from "react_utils/dialogs";
import styled from "styled-components";

const DialogContent = styled.div`
  display: grid;
  min-width: 400px;
  min-height: 200px;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-areas: "heading heading" "content content" "close confirm";
  box-sizing: border-box;
  z-index: 4;
  padding: 25px;
  background: white;
  flex-flow: column nowrap;
  border-radius: var(--br-md);
  border: none;
  box-shadow: var(--sd-9);
  row-gap: 40px;
`;

const InputDialogHeading = styled(Dialog.Heading)`
  grid-area: heading;
  justify-self: center;
  align-self: center;
  box-sizing: border-box;
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
`;

const InputDialogDescription = styled(Dialog.Description)`
  grid-area: description;
  justify-self: center;
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  font-family: NoirPro-Regular;
  font-size: var(--tx-nl);
  letter-spacing: 1px;
  word-spacing: 2px;
`;

const InputDialogClose = styled(Dialog.Close)`
  grid-area: close;
  justify-self: center;
  align-self: end;
  box-sizing: border-box;
  width: 110px;
  height: 40px;
  cursor: pointer;
  background-color: var(--primary-base);
  border-radius: var(--br-nl);
  color: white;
  font-family: NoirPro-Regular;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

const InputDialogConfirm = styled(Dialog.Confirm)`
  grid-area: confirm;
  justify-self: center;
  align-self: end;
  box-sizing: border-box;
  width: 110px;
  height: 40px;
  cursor: pointer;
  background-color: var(--primary-base);
  border-radius: var(--br-nl);
  color: white;
  font-family: NoirPro-Regular;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

function InputDialog({
  className,
  children,
  onClose,
  initialOpen,
  open,
  onOpenChange,
}) {
  return (
    <Dialog.Provider
      initialOpen={initialOpen}
      onClose={onClose}
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Content>
        <DialogContent className={className}>{children}</DialogContent>
      </Dialog.Content>
    </Dialog.Provider>
  );
}

export {
  InputDialog,
  InputDialogHeading,
  InputDialogDescription,
  InputDialogClose,
  InputDialogConfirm,
};
