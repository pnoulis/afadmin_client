import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as GroupPartyIcon } from "agent_factory.shared/ui/icons/group_add_filled.svg";
import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";
import { CreateTeam } from "./create_team/index.js";
import { useCtxMerge } from "/src/stores/index.js";
import { useAppCtx } from "/src/app/index.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";

function DialogInsufficientPlayers({ handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Merge team</AlertDialogHeading>
      <AlertDialogDescription>
        A team must be comprised of at least 2 players
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function MergePanelHeader({ className, ...props }) {
  const ctxMerge = useCtxMerge();
  const ctxApp = useAppCtx();

  const stagingArea = ctxMerge.stagingArea;

  return (
    <div className={className} {...props}>
      <ul className="header-list">
        <StyleMergePanelHeaderItem
          onClick={() => {
            const { generateGroupPlayers } = ctxApp;

            console.log("create group party");
            generateGroupPlayers()
              .then((players) => console.log(players))
              .catch((err) => console.log(err));
          }}
          text="create group party"
          Icon={<GroupPartyIcon />}
        />
        <StyleMergePanelHeaderItem
          onClick={() => {
            if (stagingArea.filter((positions) => !!positions).length < 2) {
              renderDialog(null, DialogInsufficientPlayers);
            } else {
              renderDialog(null, CreateTeam, { ctxMerge, ctxApp });
            }
          }}
          text="merge team"
          Icon={<MergeTeamIcon />}
        />
      </ul>
    </div>
  );
}

function MergePanelHeaderItem({ text, Icon, className, ...props }) {
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
