import * as React from "react";
import styled from "styled-components";
import { SvgBall, Svg } from "react_utils/svgs";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";
import { ReactComponent as UploadIcon } from "agent_factory.shared/ui/icons/save_1.svg";
import { useCtxTeamPackages } from "/src/stores/index.js";

function TeamPackagesControls({ className, ...props }) {
  const { addNewPkg } = useCtxTeamPackages();
  return (
    <StyleTeamPackagesControls className={className} {...props}>
      <NewPackage onClick={addNewPkg} />
      <UploadPackage className="upload"/>
      <DeletePackage className='delete'/>
    </StyleTeamPackagesControls>
  );
}

function NewPackage({ className, ...props }) {
  return (
    <StyleButton className={className} {...props}>
      new package
    </StyleButton>
  );
}

function UploadPackage({ className, ...props }) {
  return (
    <StyleSvgButton className={className} {...props}>
      <UploadIcon />
    </StyleSvgButton>
  );
}

function DeletePackage({ className, ...props }) {
  return (
    <StyleSvgButton className={className} {...props}>
      <TrashIcon />
    </StyleSvgButton>
  );
}

const StyleTeamPackagesControls = styled.section`
padding: 0 5px 0 0px;
  display: flex;
  flex-flow: row nowrap;
.upload {
margin-left: auto;
margin-right: 30px;
}
`;

const StyleSvgButton = styled(SvgBall)`
  cursor: pointer;
  width: 40px !important;
  height: 40px !important;
  padding: 10px !important;
  background-color: var(--primary-base);
  path {
    fill: white;
  }

  &:hover {
    opacity: 0.85;
  }
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
