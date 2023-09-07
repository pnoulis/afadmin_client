// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitPackages } from "./AwaitPackages.jsx";
import { PackageConfiguratorCard } from "/src/components/packages/index.js";
import { useContextTeam, ContextProvidePackage } from "/src/contexts/index.js";
import { usePackage } from "/src/components/packages/index.js";
import { WidgetArrow } from "/src/components/widgets/index.js";
import {
  PackageTuple,
  PkgTupleCost,
  StylePkgTupleCost,
} from "/src/components/packages/index.js";

function ConfigurePackage({ style }) {
  const ctxTeam = useContextTeam();
  const ctxPkg = usePackage(ctxTeam.team);
  return (
    <ContextProvidePackage ctx={ctxPkg}>
      <StyledConfigurePackage>
        <StyledPkgInfo>
          <StylePkgTupleCost>
            <PkgTupleCost />
          </StylePkgTupleCost>
        </StyledPkgInfo>
        <AwaitPackages>
          {(pkgs) => (
            <StyledListPackages style={{ gridArea: "pkg_config" }}>
              {pkgs.map((pkg, i) => (
                <PackageConfiguratorCard as="li" key={i} pkg={pkg} />
              ))}
            </StyledListPackages>
          )}
        </AwaitPackages>
      </StyledConfigurePackage>
    </ContextProvidePackage>
  );
}

const StyledPkgInfo = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  min-width: 200px;
  min-height: 70px;
  background-color: var(--grey-light);
  width: max-content;
  border-radius: var(--br-nl);
  padding: 10px 20px;
  column-gap: 30px;
  justify-content: center;
  align-items: start;
`;

const StyledConfigurePackage = styled("section")`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto;
  grid-template-areas: "pkg_info back" "pkg_config pkg_config";
  gap: 20px;
  justify-items: space-between;
`;
const StyledListPackages = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
`;

export { ConfigurePackage };
