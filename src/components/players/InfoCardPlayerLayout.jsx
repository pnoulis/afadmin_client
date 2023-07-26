import * as React from "react";
import styled, { css } from "styled-components";

const CssInfoCardPlayerLayout = css`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 10px 12px;
  display: grid;
  column-gap: 30px;
  align-items: start;
`;

const StyleInfoCardPlayerLayout = styled.article`
  ${CssInfoCardPlayerLayout}
`;

function InfoCardPlayerLayout({ className, children, ...props }) {
  return (
    <StyleInfoCardPlayerLayout
      tabIndex={0}
      className={className || ""}
      {...props}
    >
      {children}
    </StyleInfoCardPlayerLayout>
  );
}

export {
  CssInfoCardPlayerLayout,
  StyleInfoCardPlayerLayout,
  InfoCardPlayerLayout,
};
