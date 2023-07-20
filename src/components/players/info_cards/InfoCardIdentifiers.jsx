import styled from "styled-components";
import { InfoCardTuple } from "./InfoCardTuple.jsx";

const StyleInfoCardIdentifiers = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

const StyleInfoCardIdentifierTuple = styled(InfoCardTuple)`
  // .value {
  //   text-transform: uppercase;
  // }
`;

export { StyleInfoCardIdentifiers, StyleInfoCardIdentifierTuple };
