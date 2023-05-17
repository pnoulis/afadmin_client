import * as React from "react";
import styled, { css, keyframes } from "styled-components";
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
    changeTeamName,
    merging,
  } = useCtxGroupParty();
  const {
    registerWristbandScanListener,
    ensureUniqueWristbandColor,
    validateWristband,
  } = useAppCtx();

  return (
    <StyleCardTeam
      merging={merging}
      mergedStatus={team.mergedStatus}
      creating={team.creating}
      className={className}
      {...props}
    >
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
        <FormTeamName
          disabled={team.mergedStatus === "merged" || merging}
          teamName={team.name}
          onChange={(newTeamName) =>
            setModelGroupParty({
              teams: changeTeamName(
                modelGroupPartyRef.current.teams,
                team,
                newTeamName
              ),
            })
          }
        />
      </CardTeamName>
      <CardTeamRoster>
        {team.roster.map((member) => (
          <StyleCardTeamRosterItem key={member?.username}>
            <MemberWidget
              player={member}
              onPlayerRemove={(player) =>
                setModelGroupParty({
                  teams: removeRosterPlayer(
                    modelGroupPartyRef.current.teams,
                    team,
                    player
                  ),
                })
              }
              onPlayerToggleWristbandPairing={(player) => {
                registerWristbandScanListener(
                  modelGroupPartyRef.current.teams.map((_) => _.roster).flat(),
                  player,
                  (err, scannedWristband) => {
                    if (err) return;
                    ensureUniqueWristbandColor(team, scannedWristband)
                      .then(() =>
                        validateWristband(
                          scannedWristband,
                          modelGroupPartyRef.current.teams
                        )
                      )
                      .then(() => {
                        setModelGroupParty({
                          teams: modelGroupPartyRef.current.teams.map((_) =>
                            _?.name === team.name
                              ? {
                                  ..._,
                                  roster: _.roster.map((_player) =>
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
                              : _
                          ),
                        });
                      })
                      .catch((err) => console.log(err));
                  }
                ).then((queue) =>
                  setModelGroupParty({
                    teams: modelGroupPartyRef.current.teams.map((_) => ({
                      ..._,
                      roster: queue.splice(0, _.roster.length),
                    })),
                  })
                );
              }}
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

const animate = keyframes`
50% {
background-color: white;
border-color: var(--grey-subtle);
}
`;
const animatePairing = css`
  border-color: var(--success-base);
  background-color: var(--success-base);
  animation: ${animate} 2s infinite;
`;

const StyleCardTeam = styled.article`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: 5px solid black;
  padding: 30px 10px;
  border-radius: var(--br-lg);
  box-sizing: border-box;
  height: 220px;
  width: 1320px;
  pointer-events: ${({ merging }) => (merging ? "none" : "initial")};

  ${({ mergedStatus }) => {
    switch (mergedStatus) {
      case "merging":
        return animatePairing;
      case "merged":
        return `
pointer-events: none;
border: 5px solid var(--success-base);
`;
      case "failed":
        return `
border: 5px solid var(--error-subtle);
`;
      default:
        return `
border: 5px solid black;
background-color: white;
`;
    }
  }}
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
