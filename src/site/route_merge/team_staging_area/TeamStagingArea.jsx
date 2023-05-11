import * as React from "react";
import styled from "styled-components";
import { MemberWidget } from "./MemberWidget.jsx";
import { useCtxMerge } from "/src/stores/index.js";

const StyleMemberWidgetList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  row-gap: 50px;

  & > li {
    flex: 0 1 30%;
    margin: auto;
  }
`;

function MemberWidgetList() {
  const { stagingArea } = useCtxMerge();
  return (
    <StyleMemberWidgetList>
      {stagingArea.map((player, i) => (
        <li key={i}>
          <MemberWidget index={i} player={player} />
        </li>
      ))}
    </StyleMemberWidgetList>
  );
}

function TeamStagingArea({ className, ...props }) {
  return (
    <StyleTeamStagingArea className={className} {...props}>
      <MemberWidgetList />
    </StyleTeamStagingArea>
  );
}

const StyleTeamStagingArea = styled.section``;

export { TeamStagingArea };
