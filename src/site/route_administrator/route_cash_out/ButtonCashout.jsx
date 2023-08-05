import * as React from "react";
import styled from "styled-components";

function ButtonCashOut({ onCashOut, className, ...props }) {
  return (
    <StyledButton type="submit" className={className || ""} {...props}>
      cash out
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 300px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: var(--primary-strong);
  border-radius: var(--br-nl);
  color: white;
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
`;

export { ButtonCashOut };
