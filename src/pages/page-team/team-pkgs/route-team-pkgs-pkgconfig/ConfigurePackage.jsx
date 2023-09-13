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

function ConfigurePackage({ style, className }) {
  const ctxTeam = useContextTeam();
  const ctxPkg = usePackage(ctxTeam.team);
  return (
    <ContextProvidePackage ctx={ctxPkg}>
      <StyledConfigurePackage style={style} className={className}>
        <AwaitPackages>
          {(pkgs) => (
            <StyledListPackages>
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

const StyledConfigurePackage = styled("section")``;
const StyledListPackages = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
`;

export { ConfigurePackage };
