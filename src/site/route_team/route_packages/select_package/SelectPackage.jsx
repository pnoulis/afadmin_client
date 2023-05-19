import * as React from "react";
import styled from "styled-components";
import { useCtxTeamPackages } from "/src/stores/index.js";
import { useLoaderData } from "react-router-dom";
import { CardPackageSelector } from "./CardPackageSelector.jsx";

function SelectPackage({ className, ...props }) {
  const availablePackages = useLoaderData();
  const { selectedPkgId, packages, configurePkg } = useCtxTeamPackages();

  const name = packages.find((pkg) => pkg.id === selectedPkgId).name;
  const status = packages.find((pkg) => pkg.id === selectedPkgId).status;
  const type = packages.find((pkg) => pkg.id === selectedPkgId).type;
  console.log(status);
  return (
    <StyleSelectPackage
      key={`${selectedPkgId}${type || ""}`}
      className={className}
      {...props}
    >
      {availablePackages.map((pkg, i) => (
        <CardPackageSelector
          key={i}
          lock={status !== "new"}
          name={pkg.catalogue.find((_pkg) => _pkg.name === name)?.name}
          type={pkg.type}
          header={pkg.type}
          description={pkg.description}
          catalogue={pkg.catalogue}
          onSelect={configurePkg}
          selected={
            packages.find((_) => _.id === selectedPkgId)?.type === pkg.type
          }
        />
      ))}
    </StyleSelectPackage>
  );
}

const StyleSelectPackage = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export { SelectPackage };
