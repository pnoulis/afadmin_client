import * as React from "react";
import styled from "styled-components";
import {
  useCtxTeamPackages
} from "/src/stores/index.js";
import {
  useLoaderData
} from "react-router-dom";
import {
  CardPackageSelector
} from "./CardPackageSelector.jsx";

function SelectPackage({
  className,
  ...props
}) {
  const availablePackages = useLoaderData();
  const {
    selectedPkgId,
    packages,
    configurePkg
  } = useCtxTeamPackages();

  console.log(
    packages.find((_) => _.id === selectedPkgId)
  );
  console.log(availablePackages);
  return (
    <StyleSelectPackage className={className} {...props}>
      {availablePackages.map((pkg) => (
        <CardPackageSelector
          key={pkg.type}
          type={pkg.type}
          header={pkg.type}
          description={pkg.description}
          catalogue={pkg.catalogue}
          onSelect={configurePkg}
          selected={packages.find((_) => _.id === selectedPkgId)?.type === pkg.type}
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

export {
  SelectPackage
};
