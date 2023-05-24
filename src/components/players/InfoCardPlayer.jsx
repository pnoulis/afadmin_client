import * as React from "react";
import styled from "styled-components";
import { InfoCardTuple } from "./InfoCardTuple.jsx";

function InfoCardPlayer({ player, className, ...props }) {
  return (
    <StyleInfoCardPlayer>
      <StylePlayerIdentifiers></StylePlayerIdentifiers>
      <StylePlayerAttributes></StylePlayerAttributes>
    </StyleInfoCardPlayer>
  );
}

const StyleInfoCardPlayer = styled.article``;

const StylePlayerIdentifiers = styled.section``;

const StylePlayerAttributes = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;

  ${InfoCardTuple} {
    grid-column: 1 / 2;
  }
`;
