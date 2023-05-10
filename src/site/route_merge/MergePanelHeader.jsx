import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as GroupPartyIcon } from "agent_factory.shared/ui/icons/arrow4.svg";
import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";

function MergePanelHeader({ className, ...props }) {
  return (
    <div className={className} {...props}>
      <ul className="header-list">
        <StyleMergePanelHeaderItem
          text="create group party"
          Icon={<GroupPartyIcon />}
        />
        <StyleMergePanelHeaderItem text="merge team" Icon={<MergeTeamIcon />} />
      </ul>
    </div>
  );
}

function MergePanelHeaderItem({ text, Icon, onClick, className, ...props }) {
  return (
    <li className={className} {...props}>
      <div className="item-icon">
        <Svg fill="black" width="44px" height="44px">
          {Icon}
        </Svg>
      </div>
      <p className="item-text">{text}</p>
    </li>
  );
}

const StyleMergePanelHeaderItem = styled(MergePanelHeaderItem)`
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

const StyleMergePanelHeader = styled(MergePanelHeader)`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  padding: 3px 0;

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

export { StyleMergePanelHeader as MergePanelHeader };
