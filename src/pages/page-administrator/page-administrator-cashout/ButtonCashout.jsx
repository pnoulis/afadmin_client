import * as React from "react";
import styled from "styled-components";
import { Button } from "/src/components/buttons/index.js";

function ButtonCashout({ disabled, formId, className, style, children }) {
  return (
    <StyledButton
      disabled={disabled}
      type="submit"
      className={className}
      style={style}
      form={formId}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: 300px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: var(--primary-base);
  border-radius: var(--br-nl);
  color: white;
  font-family: Saira;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;

  &:hover {
    background-color: var(--primary-light);
  }
`;

export { ButtonCashout };
