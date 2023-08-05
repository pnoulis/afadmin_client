import * as React from "react";
import styled from "styled-components";
import { SimpleInput } from "react_utils";

function NumberOfPkgs({ label, className, ...props }) {
  return (
    <StyledNumberOfPkgs className={className} {...props}>
      <label htmlFor="npkgs">{label || "number of packages"}</label>
      <StyledSimpleInput name="npkgs" />
    </StyledNumberOfPkgs>
  );
}

const StyledNumberOfPkgs = styled.div`
  position: relative;
  font-family: Roboto-SemiBold;
  text-transform: uppercase;
  color: var(--info-medium);
  font-size: var(--tx-lg);
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  gap: 50px;
  padding-right: 80px;

  label::after {
    font-family: NoirPro-SemiBold;
    content: ":";
    margin: 0 6px 0 8px;
  }
`;

const StyledSimpleInput = styled(SimpleInput)`
  height: 50px;
  text-align: center;
  width: 120px;
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
