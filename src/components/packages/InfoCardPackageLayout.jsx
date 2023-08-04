import * as React from "react";
import styled, { css } from "styled-components";

const CssInfoCardPackageLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 10px 12px;
  column-gap: 15px;
  row-gap: 6px;
  width: 430px;
  justify-content: space-between;
align-items: center;
`;

const StyleInfoCardPackageLayout = styled.article`
  ${CssInfoCardPackageLayout}
`;

function InfoCardPackageLayout({ className, children, ...props }) {
  return (
    <StyleInfoCardPackageLayout
      tabIndex={0}
      className={className || ""}
      {...props}
    >
      {children}
    </StyleInfoCardPackageLayout>
  );
}

export {
  CssInfoCardPackageLayout,
  StyleInfoCardPackageLayout,
  InfoCardPackageLayout,
};
