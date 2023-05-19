import * as React from "react";
import styled from "styled-components";
import { CardPackage } from "./CardPackage.jsx";
import { useCtxTeamPackages } from "/src/stores/index.js";

function ListPackages({ className, ...props }) {
  const { selectedPkgId, packages, selectPkg } = useCtxTeamPackages();
  return (
    <StyleListPackages className={className} {...props}>
      <StyleScrollableList>
        {packages.map((pkg) => (
          <StyleListPackagesItem
            key={pkg.id}
            selected={selectedPkgId === pkg.id}
            onClick={() => selectPkg(pkg.id)}
          >
            <CardPackage pkg={pkg} />
          </StyleListPackagesItem>
        ))}
      </StyleScrollableList>
    </StyleListPackages>
  );
}

const StyleListPackages = styled.section`
  border-radius: var(--br-nl);
  padding: 10px 0 10px 10px;
  border: 1px solid var(--grey-light);
  background-color: var(--grey-light);
  box-shadow: var(--sd-2);
`;

const StyleScrollableList = styled.ul`
  overflow-y: auto;
  scrollbar-color: rgb(48, 25, 52) grey;
  scrollbar-gutter: stable both-edges;
  height: 540px;
  display: flex;
  flex-flow: column nowrap;
  padding-right: 20px;
  gap: 20px;
`;

const StyleListPackagesItem = styled.li`
  box-sizing: border-box;
  border: 3px solid transparent;
  cursor: pointer;
  border-radius: var(--br-nl);
  background-color: white;
  font-family: NoirPro-Regular;
  color: white;
  font-size: var(--tx-md);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 55px;

  &:hover {
    border-color: var(--primary-medium);
  }

  ${({ selected }) => selected && "border-color: var(--primary-medium)"}
`;

export { ListPackages };
