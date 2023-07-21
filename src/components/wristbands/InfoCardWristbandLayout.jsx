import * as React from "react";
import styled, { css } from "styled-components";

const CssInfoCardWristbandLayout = css`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  width: max-content;
  border-radius: var(--br-lg);
  padding: 10px 12px;
  display: grid;
  column-gap: 30px;
  min-width: 200px;
  align-items: center;
`;

const StyleInfoCardWristbandLayout = styled.article`
  ${CssInfoCardWristbandLayout}
`;

function InfoCardWristbandLayout({ className, children, ...props }) {
  return (
    <StyleInfoCardWristbandLayout
      tabIndex={0}
      className={className || ""}
      {...props}
    >
      {children}
    </StyleInfoCardWristbandLayout>
  );
}

export {
  CssInfoCardWristbandLayout,
  StyleInfoCardWristbandLayout,
  InfoCardWristbandLayout,
};
