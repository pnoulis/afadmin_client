import styled from "styled-components";

const StyleLayoutFm = styled.div`
  pointer-events: none;
  padding: 10px 20px;
  width: 600px;
  margin: auto;
  border-radius: var(--br-nl);
  font-size: var(--tx-md);
  letter-spacing: 1px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: white;
  gap: 20px;
  box-shadow: var(--sd-8);

  background-color: ${({ variant }) => {
    switch (variant) {
      case "info":
        return "var(--info-strong)";
      case "success":
        return "var(--success-medium)";
      case "warn":
        return "var(--warn-medium)";
      case "error":
        return "var(--error-base)";
      default:
        return "black";
    }
  }};
`;

const StyleLayoutFmIcon = styled.section`
  flex: 0 0 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleLayoutFmMessage = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  overflow-wrap: anywhere;
`;

const StyleLayoutFmRoot = styled.div`
  pointer-events: none;
  align-self: end;
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: max-content;
  column-gap: 20px;
  row-gap: 20px;
  padding-bottom: 30px;
  justify-items: end;
  padding-right: 70px;
`;

export {
  StyleLayoutFm,
  StyleLayoutFmIcon,
  StyleLayoutFmMessage,
  StyleLayoutFmRoot,
};
