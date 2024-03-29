import * as React from "react";
import styled from "styled-components";
import { SimpleInput } from "react_utils";

function CashiersName({ className, style }) {
  return (
    <StyledSimpleInput className={className} style={style} name="cashierName" />
  );
}

const StyledSimpleInput = styled(SimpleInput)`
  all: unset;
  display: block;
  box-sizing: border-box;
  height: 60px;
  pointer-events: none;
  position: relative;
  font-family: Saira;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--info-medium);
  font-weight: 600;

  .input {
    height: 100%;
    width: 100%;
    pointer-events: auto;
    background-color: var(--grey-light);
    padding: 0 6px;
    border-radius: var(--br-nl);
    border: 2px solid inherit;
    font-size: var(--tx-nl);
    text-align: center;
    outline: none;
    color: black;

    ${({ error }) => error && "border-color: var(--error-base)"}
  }

  .input::placeholder {
    opacity: 1;
  }
`;

export { CashiersName };
