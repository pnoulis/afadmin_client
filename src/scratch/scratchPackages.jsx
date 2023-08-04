import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useLoaderData, Await } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import styled from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import {
  CardPackageSelector,
  PackageTuple,
  StyledPackageTuple,
  Package,
  InfoCardPackageLayout,
  StyledPackageTupleState,
  StyledPackageTupleCost,
} from "/src/components/packages/index.js";
import { TeamPackagesControls } from "/src/site/route_team/TeamPackagesControls.jsx";

function SomeComponent() {
  const ctx = useContextPackage();
  console.log(ctx);
  return (
    <div>
      <InfoCardPackageLayout>
        <StyledPackageTuple name="type" />
        <StyledPackageTupleState/>
        <StyledPackageTupleCost />
      </InfoCardPackageLayout>
    </div>
  );
}

export default function scratchPackages() {
  const loadPackages = useLoaderData();
  return (
    <div style={{ width: "1300px" }}>
      <h1>scratch packages</h1>
      <div style={{ width: "100%" }}>
        <React.Suspense fallback={<StyleMoonLoader />}>
          <Await resolve={loadPackages.packages}>
            {(packages = []) =>
              packages.map((p, i) => (
                <Package
                  pkg={{
                    id: 3,
                    name: "Per Time 60",
                    cost: 50,
                    started: null,
                    ended: null,
                    duration: 3600,
                    paused: false,
                    active: false,
                  }}
                  key={i}
                >
                  <SomeComponent />
                </Package>
              ))
            }
          </Await>
        </React.Suspense>
      </div>
    </div>
  );
}

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={50} />;
}

const StyleRouteTeamPackages = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content 1fr 1fr;
  grid-template-columns: minmax(450px, max-content) 1fr;
  grid-template-areas:
    "team_info team_info"
    "team_packages_controls team_packages_controls"
    "list_packages select_package"
    "list_packages configure_package";
  row-gap: 40px;
  column-gap: 50px;
`;

const StyleSelectPackage = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
