// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "/src/components/teams/index.js";
import { TeamPlayers } from "./TeamPlayers.jsx";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { ConfigurePackage } from "./ConfigurePackage.jsx";
import {
  WidgetPlus,
  WidgetSave,
  WidgetTrash,
  WidgetStart,
} from "/src/components/widgets/index.js";

function PageTeam() {
  const navigate = useNavigate();
  // team derived from navigate({state}) of react-router-dom.
  const { state: team } = useLocation();
  const ctxTeam = usePersistentTeam(team);

  React.useLayoutEffect(() => {
    if (!team) {
      navigate("/404");
    }
  }, [team]);

  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <StyledPageTeam>
        <StyledPkgToolbar style={{ gridArea: "pkg_toolbar" }}>
          <StyledPkgToolbarWidgetPlus tooltipContent="add package" />
          <StyledPkgToolbarWidgetTrash tooltipContent="remove package" />
          <WidgetSave tooltipContent="upload package" />
          <WidgetStart tooltipContent="activate package" />
        </StyledPkgToolbar>
        <ConfigurePackage style={{ gridArea: "pkg_view" }} />
        <TeamPlayers style={{ gridArea: "roster" }} />
      </StyledPageTeam>
    </ContextProvideTeam>
  );
}

const StyledPageTeam = styled("div")`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: 50% auto;
  grid-template-areas:
    "pkg_toolbar team_info"
    "pkg_view roster"
    "pkg_view roster";
  justify-content: space-between;
  row-gap: 40px;
`;

const StyledPkgToolbar = styled("section")`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
`;

const StyledPkgToolbarWidgetPlus = styled(WidgetPlus)`
  background-color: var(--primary-base);
  svg {
    fill: white;
  }
`;
const StyledPkgToolbarWidgetTrash = styled(WidgetTrash)`
  background-color: var(--primary-base);
  svg {
    fill: white;
  }
`;

export { PageTeam };
