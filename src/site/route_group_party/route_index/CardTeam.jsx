import * as React from "react";
import styled from "styled-components";
import { MemberWidget } from "./MemberWidget.jsx";
import { FormTeamName } from "./FormTeamName.jsx";
import { SvgBall, Svg } from "react_utils/svgs";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";
import { ReactComponent as AddIcon } from "agent_factory.shared/ui/icons/add_0.svg";
import { useCtxGroupParty } from "/src/stores/index.js";
import { useAppCtx } from "/src/app/index.js";

function CardTeam({ team, className, children, ...props }) {
  const {
    setModelGroupParty,
    modelGroupPartyRef,
    removeGroupPartyTeam,
    removeRosterPlayer,
    addRosterPlayer,
  } = useCtxGroupParty();
  const {
    toggleWristbandPairing,
    removePlayerWristbandRegistrationQueue,
    registerWristbandScanListener,
  } = useAppCtx();

  return (
    <StyleCardTeam className={className} {...props}>
      <CardTeamToolbar>
        <ToolbarDeleteTeam
          onClick={() => {
            setModelGroupParty({
              teams: removeGroupPartyTeam(
                modelGroupPartyRef.current.teams,
                team
              ),
            });
          }}
        />
        <ToolbarAddTeamPlayer
          onClick={() => {
            setModelGroupParty({
              teams: addRosterPlayer(modelGroupPartyRef.current.teams, team),
            });
          }}
        />
      </CardTeamToolbar>
      <CardTeamToolbar />
      <CardTeamName>
        <FormTeamName teamName={team.name} />
      </CardTeamName>
      <CardTeamRoster>
        {team.roster.map((player) => (
          <StyleCardTeamRosterItem key={player.username}>
            <MemberWidget
              onPlayerToggleWristbandPairing={(player) => {
                const queue = modelGroupPartyRef.current.teams
                  .map((team) => team.roster)
                  .flat();

                registerWristbandScanListener(
                  queue,
                  player,
                  (err, scannedWristband) => {
                    if (err) return;
                    console.log("WRISTBAND RETURN");
                    console.log(modelGroupPartyRef.current);
                    setModelGroupParty({
                      teams: modelGroupPartyRef.current.teams.map((_team) =>
                        _team?.name === team.name
                          ? {
                              ...team,
                              roster: _team.roster.map((_player) =>
                                _player?.wristband?.pairing
                                  ? {
                                      ..._player,
                                      wristband: {
                                        ...scannedWristband,
                                        pairing: false,
                                        active: true,
                                      },
                                    }
                                  : _player
                              ),
                            }
                          : _team
                      ),
                    });
                  }
                ).then((queue) =>
                  setModelGroupParty({
                    teams: modelGroupPartyRef.current.teams.map((_team) => ({
                      ..._team,
                      roster: queue.splice(0, _team.roster.length),
                    })),
                  })
                );
              }}
              onPlayerRemove={(player) =>
                setModelGroupParty({
                  teams: removeRosterPlayer(
                    modelGroupPartyRef.current.teams,
                    team,
                    player
                  ),
                })
              }
              player={player}
            />
          </StyleCardTeamRosterItem>
        ))}
      </CardTeamRoster>
    </StyleCardTeam>
  );
}

function CardTeamToolbar({ children }) {
  return <StyleCardTeamToolbar>{children}</StyleCardTeamToolbar>;
}

function ToolbarDeleteTeam({ className, ...props }) {
  return (
    <StyleToolbarDeleteTeam className={className} {...props}>
      <StyleTrashIcon>
        <TrashIcon />
      </StyleTrashIcon>
    </StyleToolbarDeleteTeam>
  );
}

function ToolbarAddTeamPlayer({ className, ...props }) {
  return (
    <StyleToolbarAddTeamPlayer className={className} {...props}>
      <StyleAddIcon>
        <AddIcon />
      </StyleAddIcon>
    </StyleToolbarAddTeamPlayer>
  );
}

function CardTeamName({ className, children, ...props }) {
  return (
    <StyleCardTeamName className={className} {...props}>
      {children}
    </StyleCardTeamName>
  );
}

function CardTeamRoster({ className, children, ...props }) {
  return (
    <StyleCardTeamRoster className={className} {...props}>
      {children}
    </StyleCardTeamRoster>
  );
}

const StyleCardTeam = styled.article`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: 3px solid black;
  padding: 30px 10px;
  border-radius: var(--br-lg);
  box-sizing: border-box;
  height: 225px;
`;

const StyleCardTeamName = styled.h1``;

const StyleCardTeamRoster = styled.ul`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  padding-left: 40px;
  gap: 60px;
`;

const StyleCardTeamRosterItem = styled.li``;

const StyleCardTeamToolbar = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const StyleTrashIcon = styled(SvgBall)`
  cursor: pointer;
  width: 20px !important;
  height: 20px !important;
  padding: 10px !important;
  background-color: var(--grey-subtle);
  path {
    fill: var(--primary-subtle);
  }

  &:hover {
    background-color: var(--grey-light);
  }
`;

const StyleAddIcon = styled(SvgBall)`
  cursor: pointer;
  width: 20px !important;
  height: 20px !important;
  padding: 10px !important;
  background-color: var(--grey-subtle);
  path {
    fill: var(--primary-medium);
  }

  &:hover {
    background-color: var(--grey-light);
  }
`;

const StyleToolbarDeleteTeam = styled.li``;

const StyleToolbarAddTeamPlayer = styled.li``;

export { CardTeam };
