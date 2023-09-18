import * as React from "react";
import styled from "styled-components";
import { SimpleInput } from "react_utils";

function NumberOfPkgs({ label, className, ...props }) {
  return (
    <StyledNumberOfPkgs className={className} {...props}>
      <label htmlFor="npkgs">{label || "number of packages"}</label>
      <StyledSimpleInput name="npkgs" placeholder="0" />
    </StyledNumberOfPkgs>
  );
}

const StyledNumberOfPkgs = styled.div`
  position: relative;
  font-family: Saira;
  text-transform: uppercase;
  color: var(--secondary-medium);
  font-size: var(--tx-lg);
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  gap: 50px;
  padding-right: 80px;

  label::after {
    font-weight: 700;
    content: ":";
    margin: 0 6px 0 8px;
  }
`;

const StyledSimpleInput = styled(SimpleInput)`
  height: 50px;
  text-align: center;
  width: 120px;
  font-weight: 600;
  .input {
    color: black;
    padding: 0 6px;
    height: 100%;
    width: 100%;

    text-align: center;
    border-radius: var(--br-nl);
    background-color: var(--grey-light);
  }
`;

export { NumberOfPkgs };
