import * as React from "react";
import styled, { css } from "styled-components";
import { MoonLoader } from "react-spinners";
import { afmachine } from "/src/services/afmachine.js";
import {
  useLocation,
  useNavigate,
  useLoaderData,
  Await,
} from "react-router-dom";
import { CardPackageSelector } from "/src/components/packages/index.js";
import { TeamPackagesControls } from "./TeamPackagesControls.jsx";
import {
  useTeam,
  StyledTeamTuple,
  StyledTeamTupleState,
} from "/src/components/teams/index.js";
import {
  ContextProvideTeam,
  ContextProvidePackage,
} from "/src/contexts/index.js";
import { usePackage } from "/src/components/packages/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { ListPackages } from "./ListPackages.jsx";
import { InfoCardPlayerReference } from "/src/components/players/InfoCardPlayerReference.jsx";
import { ActionCardRegistrationQueue } from "/src/components/registration_queue/ActionCardRegistrationQueue.jsx";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { Package, Packageless } from "/src/components/packages/index.js";
import {
  StyledPackageTuple,
  StyledPackageTupleCost,
  StyledPackageTupleState,
} from "/src/components/packages/index.js";
import { WidgetArrow } from "/src/components/widgets/index.js";
import { InfoCardPackageReference } from "/src/components/packages/InfoCardPackageReference.jsx";
import { RouteTeamInfoCardPlayer } from "./RouteTeamInfoCardPlayer.jsx";

function RouteTeam() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const loadPackages = useLoaderData();
  const ctx = useTeam(state);
  const pkgCtx = usePackage(null, {
    team: ctx.team,
    onAddPackage: ctx.addPackage,
  });

  React.useEffect(() => {
    if (!state) {
      navigate("/404");
    }
  }, []);

  return (
    <ContextProvideTeam ctx={ctx}>
      <ContextProvidePackage ctx={pkgCtx}>
        <StyleRouteTeamPackages>
          <PopoverAsyncState action={ctx.team.registerPackage} />
          <PopoverAsyncState action={ctx.team.removePackage} />
          <PopoverAsyncState action={ctx.team.activate} />
          <StyledTeamInfo style={{ gridArea: "team_info" }}>
            <TeamPackagesControls
              style={{ gridRow: "1 / 3", gridColumn: " 1 / 2" }}
            />
            <StyledTeamName
              nok
              name="name"
              style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}
            />
            <StyledTeamState
              nok
              style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
            />
          </StyledTeamInfo>
          {pkgCtx.newpkg ? (
            <>
              <StyledPkgInfo>
                <Packageless pkg={pkgCtx.AFPkg}>
                  <RouteTeamPackageTupleCost nok />
                  <RouteTeamPackageTupleState nok />
                  <RouteTeamWidgetArrow
                    onClick={pkgCtx.delpkg}
                    tooltipContent="scratch"
                  />
                </Packageless>
              </StyledPkgInfo>
              <StyleSelectPackage
                style={{ gridRow: " 3 / 5", gridColumn: "1 / 2" }}
              >
                <React.Suspense fallback={<StyleMoonLoader />}>
                  <Await resolve={loadPackages.packages}>
                    {(packages = []) =>
                      packages.map((AFPkg, i) => (
                        <CardPackageSelector
                          key={i}
                          header={AFPkg.type}
                          description={AFPkg.description}
                          type={AFPkg.type}
                          catalogue={AFPkg.catalogue}
                          onSelect={pkgCtx.selectPkg}
                          selected={pkgCtx.AFPkg?.type === AFPkg.type}
                        />
                      ))
                    }
                  </Await>
                </React.Suspense>
              </StyleSelectPackage>
            </>
          ) : (
            <>
              <ListPackages
                id="yolo"
                style={{
                  width: "max-content",
                  gridRow: "3 / 5",
                  gridColumn: "1 / 2",
                }}
              >
                {ctx.team.packages.map((pkg, i) => (
                  <Packageless team={ctx.team} pkg={pkg} key={i}>
                    <RouteInfoCardPackageReference
                      selected={pkgCtx.pickedPkg === i}
                      onClick={pkgCtx.pickpkg.bind(null, i)}
                    />
                  </Packageless>
                ))}
              </ListPackages>
            </>
          )}
          <ListPackages
            id="yolo2"
            style={{ gridRow: "3 / 5", gridColumn: "2 / 3" }}
          >
            {ctx.roster.map((p, i) => (
              <RouteTeamInfoCardPlayer key={i} player={p} />
            ))}
          </ListPackages>
        </StyleRouteTeamPackages>
      </ContextProvidePackage>
    </ContextProvideTeam>
  );
}
function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={50} />;
}

const StyleSelectable = styled.li`
  border-radius: var(--br-nl);
  border: 3px solid transparent;
  &:hover {
    cursor: pointer;
    border-color: var(--primary-medium);
  }

  ${({ selected }) => selected && "background-color: var(--primary-medium)"}
`;

const RouteInfoCardPackageReference = styled(InfoCardPackageReference)`
  width: 600px;
  margin: auto;
  border: 3px solid transparent;
  &:hover {
    cursor: pointer;
    border-color: var(--primary-medium);
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--primary-medium);
      .key {
        color: white;
      }
      .value {
        font-size: var(--tx-lg);
        color: white;
      }
    `}
`;
const RouteTeamWidgetArrow = styled(WidgetArrow)`
  order: 3;
  margin-left: auto;
  padding: 9px;
`;
const RouteTeamPackageTupleCost = styled(StyledPackageTupleCost)`
  order: 2;
  .value {
    color: black;
    font-size: var(--tx-xl);
    font-family: NoirPro-SemiBold;
  }
  .value::after {
    font-size: var(--tx-xl);
  }
`;
const RouteTeamPackageTupleState = styled(StyledPackageTupleState)`
  .value {
    font-size: var(--tx-xl);
  }
  .value::after {
    content: "package";
    margin-left: 10px;
  }
`;

const StyledPkgInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: start;
`;
const StyledTeamInfo = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  grid-auto-rows: max-content;
  grid-auto-columns: max-content 1fr;
`;

const StyledTeamName = styled(StyledTeamTuple)`
  justify-self: end;
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-xxl);
  text-transform: uppercase;
  .value {
    font-size: var(--tx-xxl);
  }
`;

const StyledTeamState = styled(StyledTeamTupleState)`
  justify-self: end;
  .value {
    font-family: NoirPro-SemiBold;
    text-transform: uppercase;
    font-size: var(--tx-xxl);
  }
`;
const StyleRouteTeamPackages = styled.div`
  width: 100%;
  height: 100%;
  max-height: 900px;
  padding: 0 50px;
  display: grid;
  grid-template-rows: max-content minmax(60px, auto) 1fr 1fr;
  grid-template-columns: 50% 45%;
  grid-template-areas:
    "team_info team_info"
    "list_packages pkg_info"
    "list_packages select_package"
    "list_packages configure_package";
  justify-content: space-between;
  row-gap: 20px;
  column-gap: 100px;
`;

const StyleSelectPackage = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 100px;
`;

export { RouteTeam };
