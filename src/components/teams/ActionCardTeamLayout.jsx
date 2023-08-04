import * as React from "react";
import styled, { css } from "styled-components";

const CssInfoCardTeamLayout = css`
  display: grid;
  grid-auto-columns: max-content max-content;
  grid-auto-rows: 1fr;
  border-radius: var(--br-lg);
  padding: 10px 30px;
  background-color: var(--grey-light);
  column-gap: 30px;
  justify-items: center;
  align-items: center;
`;

const StyleInfoCardTeamLayout = styled.article`
  ${CssInfoCardTeamLayout}
`;

function StyledInfoCardTeamLayout({ className, children, ...props }) {
  return (
    <StyleInfoCardTeamLayout className={className || ""} {...props}>
      {children}
    </StyleInfoCardTeamLayout>
  );
}

export {
  CssInfoCardTeamLayout,
  StyleInfoCardTeamLayout,
  StyledInfoCardTeamLayout,
};
