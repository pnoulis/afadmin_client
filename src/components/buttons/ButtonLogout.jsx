import * as React from "react";
import styled from "styled-components";

function ButtonLogout({ type, className, ...props }) {
  return (
    <StyledButton
      type={type || "button"}
      className={className || ""}
      {...props}
    >
      logout
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100px;
  padding: 5px 20px;
  cursor: pointer;
  background-color: var(--primary-strong);
  border-radius: var(--br-xs);
  color: white;
  font-family: NoirPro-Regular;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: lowercase;
  text-align: center;
`;

export { ButtonLogout };
