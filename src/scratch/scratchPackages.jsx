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
  StyledPackageTupleTime,
  StyledPackageTupleAmount,
  StyledPackageTupleRemainder,
  InfoCardPackageReference,
} from "/src/components/packages/index.js";
import { TeamPackagesControls } from "/src/site/route_team/TeamPackagesControls.jsx";

const getTime = (() => {
  let currentLang;
  let locale;
  const time = new Map();
  return (timestamp, lang = "en-uS") => {
    const date = new Date(timestamp || Date.now());
    if (typeof locale === "undefined" || lang !== currentLang) {
      locale = new Intl.DateTimeFormat(lang, {
        month: "short",
        weekday: "short",
        day: "numeric",
        hour: "2-digit",
        second: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      });
    }
    locale
      .formatToParts(timestamp)
      .forEach((el) => time.set(el.type, el.value));
    return Object.fromEntries(time);
  };
})();

function SomeComponent() {
  const ctx = useContextPackage();
  return (
    <div style={{ marginBottom: "20px" }}>
      <InfoCardPackageReference/>
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
                <Package pkg={afmachine.Package.random()} key={i}>
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
