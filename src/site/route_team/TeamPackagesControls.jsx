import * as React from "react";
import styled from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import {
  WidgetPlus,
  WidgetSave,
  WidgetTrash,
  WidgetStart,
  WidgetStop,
} from "/src/components/widgets/index.js";

function TeamPackagesControls({ className, ...props }) {
  const { uploadPkg, addNewPkg, removePkg, startPkg, stopPkg} =
    useContextPackage();
  return (
    <StyleTeamPackagesControls className={className} {...props}>
      <StyledWidgetPlus onClick={addNewPkg} tooltipContent="add package" />
      <WidgetSave onClick={uploadPkg} tooltipContent="upload package" />
      <StyledDeletePackage
        onClick={removePkg}
        tooltipContent="remove package"
      />
      <WidgetStart onClick={startPkg} tooltipContent="activate package" />
      <WidgetStop onClick={stopPkg} tooltipContent="pause package" />
    </StyleTeamPackagesControls>
  );
}

const StyledDeletePackage = styled(WidgetTrash)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 12px;
  border-radius: 50%;
  background-color: var(--primary-base);
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }
`;

const StyledWidgetPlus = styled(WidgetPlus)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 12px;
  border-radius: 50%;
  background-color: var(--primary-base);
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }
`;

const StyleTeamPackagesControls = styled.section`
  padding: 0px 5px 0 0px;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
`;

const StyleButton = styled.button`
  box-sizing: border-box;
  background-color: var(--primary-base);
  letter-spacing: 2px;
  word-spacing: 1px;
  color: white;
  font-family: NoirPro-Regular;
  text-transform: uppercase;
  font-size: var(--tx-md);
  padding: 5px 12px;
  min-height: 60px;
  min-width: 70px;
  height: max-content;
  width: max-content;
  border-radius: var(--br-nl);
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export { TeamPackagesControls };
