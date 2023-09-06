// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AwaitPackages } from "./AwaitPackages.jsx";
import { PackageConfiguratorCard } from "/src/components/packages/index.js";

function ConfigurePackage({ style }) {
  return (
    <AwaitPackages
      style={{
        gridArea: "pkg_view",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {(pkgs) => (
        <StyledListPackages
          style={{
            gridArea: "pkg_view",
            ...style,
          }}
        >
          {pkgs.map((pkg, i) => (
            <PackageConfiguratorCard as="li" key={i} pkg={pkg} />
          ))}
        </StyledListPackages>
      )}
    </AwaitPackages>
  );
}

const StyledListPackages = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export { ConfigurePackage };
