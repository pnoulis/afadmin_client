import * as React from "react";
import styled from "styled-components";
import { MoonLoader } from "react-spinners";
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

function RouteTeam() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const loadPackages = useLoaderData();
  const ctx = useTeam(state);
  const pkgCtx = usePackage({ team: ctx.team, onAddPackage: ctx.addPackage });

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
          <StyleSelectPackage style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>
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
        </StyleRouteTeamPackages>
      </ContextProvidePackage>
    </ContextProvideTeam>
  );
}
function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={50} />;
}

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
  padding: 0 50px;
  display: grid;
  grid-template-rows: max-content 1fr 1fr;
  grid-template-columns: minmax(450px, max-content) 1fr;
  grid-template-areas:
    "team_info team_info"
    "list_packages select_package"
    "list_packages configure_package";
  gap: 30px;
`;

const StyleSelectPackage = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export { RouteTeam };
