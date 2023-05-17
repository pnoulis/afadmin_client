import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as GroupPartyAddTeamIcon } from "agent_factory.shared/ui/icons/group_add_filled.svg";
import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";
import { ReactComponent as GroupPartyIcon } from "agent_factory.shared/ui/icons/group_filled.svg";
import { useCtxGroupParty } from "/src/stores/index.js";

function PanelHeaderGroupParty({ className, ...props }) {
  const { createGroupParty, addGroupPartyTeam, initMergingSequence, merging } =
    useCtxGroupParty();

  return (
    <StylePanelHeaderGroupParty
      merging={merging}
      className={className}
      {...props}
    >
      <ul className="header-list">
        <PanelHeaderItem
          onClick={createGroupParty}
          text="new group party"
          Icon={<GroupPartyIcon />}
        />
        <PanelHeaderItem
          onClick={addGroupPartyTeam}
          text="add team"
          Icon={<GroupPartyAddTeamIcon />}
        />
        <PanelHeaderItem
          onClick={initMergingSequence}
          text="merge group party"
          Icon={<MergeTeamIcon />}
        />
      </ul>
    </StylePanelHeaderGroupParty>
  );
}
function PanelHeaderItem({ text, Icon, className, ...props }) {
  return (
    <StyleMergePanelHeaderItem className={className} {...props}>
      <div className="item-icon">
        <Svg fill="black" width="50px" height="50px">
          {Icon}
        </Svg>
      </div>
      <p className="item-text">{text}</p>
    </StyleMergePanelHeaderItem>
  );
}

const StyleMergePanelHeaderItem = styled.li`
  all: unset;
  /* Type */
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.4em;
  /* Dimensions */
  width: 100%;
  height: 100%;
  padding: 0.7em;
  /* Position */
  position: relative;
  overflow: hidden;
  /* Fonts */
  /* Effects */
  color: black;
  cursor: pointer;
  border-radius: var(--br-lg);
  background-color: var(--grey-base);
  transition: transform 0.3s;
  backface-visibility: hidden;

  &:hover {
    transform: translateZ(0) scale(1.1);
  }

  &:active {
    background-color: var(--primary-light);
    color: white;

    & svg {
      fill: white;
    }
  }

  .item-icon {
    all: unset;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    fill: white;
  }

  .item-text {
    all: unset;
    min-height: 50px;
    box-sizing: border-box;
    text-align: center;
    font-size: var(--text-xs);
    text-transform: uppercase;
    font-family: NoirPro-Medium;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    white-space: wrap;
  }
`;

const StylePanelHeaderGroupParty = styled.div`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  padding: 3px 0;
  pointer-events: ${({ merging }) => (merging ? "none" : "initial")};

  .header-list {
    all: unset;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    list-style: none;
  }

  .header-list > li {
    height: 100%;
    width: 150px;
  }
`;

export { PanelHeaderGroupParty };
