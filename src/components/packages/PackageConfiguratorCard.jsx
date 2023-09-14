// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { smallid } from "js_utils/uuid";
// ------------------------------ project  ------------------------------- //
import { ComboboxSelectPackage } from "./ComboboxSelectPackage.jsx";

function PackageConfiguratorCard({
  pkg,
  lock,
  as,
  onSelect = () => {},
  selected,
  className,
}) {
  const labels = React.useMemo(() => {
    return pkg.catalogue.map(({ name }) => name);
  }, [pkg.catalogue]);

  return (
    <StyledPackageConfiguratorCard
      as={as}
      lock={lock}
      selected={selected}
      className={className}
    >
      <p className="pkg-header">{pkg.type}</p>
      <p className="pkg-description">{pkg.description}</p>
      <div className="pkg-catalogue">
        <ComboboxSelectPackage
          selected={selected}
          type={pkg.type}
          value={pkg.name}
          options={pkg.catalogue}
          getLabels={() => labels}
          onSelect={onSelect}
          labelledBy="pkg-description"
        />
      </div>
    </StyledPackageConfiguratorCard>
  );
}

const StyledPackageConfiguratorCard = styled("article")`
  width: 300px;
  height: 200px;
  border: 4px solid
    ${({ selected }) => (selected ? "var(--primary-light)" : "transparent")};
  border-radius: var(--br-xl);
  box-shadow: var(--sd-14), var(--sd-4);
  background-color: white;
  font-family: Saira;
  font-size: var(--text-md);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  word-spacing: 1px;
  cursor: pointer;
  padding: 25px 15px 20px 15px;
  font-weight: 550;

  &:hover {
    border-color: var(--primary-light);
  }

  .pkg-header {
    font-size: var(--tx-lg);
    color: var(--primary-base);
  }

  .pkg-description {
    margin-top: 20px;
  }

  .pkg-catalogue {
    margin-top: 20px;
  }

  pointer-events: ${({ lock }) => (lock ? "none" : "iniital")};
`;

export { PackageConfiguratorCard };
