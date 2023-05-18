import * as React from "react";
import styled from "styled-components";
import { useCtxTeamPackages } from "/src/stores/index.js";

function CardPackageSelector({ header, description, catalogue }) {
  return (
    <StyleCardPackageSelector>
      <p className="pkg-header">{header}</p>
      <p className="pkg-description">{description}</p>
      <p></p>
    </StyleCardPackageSelector>
  );
}

const StyleCardPackageSelector = styled.article`
  width: 350px;
  height: 225px;
  border: 4px solid transparent;
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

  .pkg-header {
    font-size: var(--tx-lg);
  }

  .pkg-description {
    margin-top: 30px;
  }
`;

export { CardPackageSelector };
