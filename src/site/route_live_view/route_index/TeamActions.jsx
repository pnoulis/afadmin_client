import * as React from "react";
import styled from "styled-components";
import { SvgBall, Svg } from "react_utils/svgs";
import { ReactComponent as PlayIcon } from "agent_factory.shared/ui/icons/play_fill.svg";
import { ReactComponent as StopIcon } from "agent_factory.shared/ui/icons/stop_fill.svg";
import { useAppCtx } from "/src/app/index.js";

function TeamActions(team) {
  const { startTeam, stopTeam } = useAppCtx();
  return (
    <StyleTeamAction>
      <StartPackage
        onClick={(e) => {
          e.stopPropagation();
          startTeam({
            teamName: team.team.name,
          });
        }}
      />
      <StopPackage
        onClick={(e) => {
          e.stopPropagation();
          //stopTeam(team);
        }}
      />
    </StyleTeamAction>
  );
}

function StartPackage({ className, ...props }) {
  return (
    <StyleSvgButton className={`${className || ""} play`} {...props}>
      <PlayIcon />
    </StyleSvgButton>
  );
}

function StopPackage({ className, ...props }) {
  return (
    <StyleSvgButton className={className} {...props}>
      <StopIcon />
    </StyleSvgButton>
  );
}

const StyleTeamAction = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const StyleSvgButton = styled(SvgBall)`
  cursor: pointer;
  width: 40px !important;
  height: 40px !important;
  padding: 8px !important;
  box-sizing: border-box !important;
  background-color: var(--primary-base);

  path {
    fill: white;
  }

  &:hover {
    opacity: 0.85;
  }

  &.play {
    padding-left: 11px !important;
  }
`;

export { TeamActions };
