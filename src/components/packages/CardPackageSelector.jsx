import * as React from "react";
import styled from "styled-components";
import { ComboboxSelectPackage } from "/src/components/comboboxes/index.js";

function CardPackageSelector({
  type,
  lock,
  name,
  header,
  description,
  catalogue,
  onSelect,
  selected,
  className,
  ...props
}) {
  const labels = React.useMemo(() => {
    return catalogue.map(({ name }) => name);
  }, [catalogue]);

  return (
    <StyleCardPackageSelector
      lock={lock}
      selected={selected}
      className={className}
      {...props}
    >
      <p className="pkg-header">{header}</p>
      <p className="pkg-description">{description}</p>
      <div className="pkg-catalogue">
        <ComboboxSelectPackage
          selected={selected}
          type={type}
          value={name}
          options={catalogue}
          getLabels={() => labels}
          onSelect={onSelect}
          labelledBy="pkg-description"
        />
      </div>
    </StyleCardPackageSelector>
  );
}

const StyleCardPackageSelector = styled.article`
  width: 350px;
  height: 225px;
  border: 4px solid
    ${({ selected }) => (selected ? "var(--primary-medium)" : "transparent")};
  box-shadow: var(--sd-14);
  border-radius: var(--br-xl);
  font-family: NoirPro-Medium;
  font-size: var(--text-md);
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  letter-spacing: 1px;
  word-spacing: 1px;
  cursor: pointer;
  padding: 25px 15px 20px 15px;

  &:hover {
    border-color: var(--primary-medium);
  }

  .pkg-header {
    font-size: var(--tx-lg);
  }

  .pkg-description {
    margin-top: 30px;
  }

  .pkg-catalogue {
    margin-top: 30px;
  }

  pointer-events: ${({ lock }) => (lock ? "none" : "iniital")};
`;

export { CardPackageSelector };
