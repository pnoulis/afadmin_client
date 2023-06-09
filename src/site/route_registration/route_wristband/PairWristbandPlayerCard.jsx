import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Signal } from "agent_factory.shared/ui/icons/signal_1.svg";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/x-10329.svg";
import { SvgBall } from "react_utils/svgs";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";
import { useCtxRegistration } from "/src/stores/index.js";
import { useAppCtx } from "/src/app/index.js";

const StylePlayerRemoveSvg = styled(SvgBall)`
  background-color: var(--black-subtle) !important;
`;

const StylePlayerRemove = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(20%, -20%);
  cursor: pointer;
`;
function PlayerRemove({
  player,
  onRemovePlayerRoster = () => {},
  size,
  ...props
}) {
  return (
    <StylePlayerRemove {...props}>
      <StylePlayerRemoveSvg size={size || "20px"} color="white">
        <TrashIcon />
      </StylePlayerRemoveSvg>
    </StylePlayerRemove>
  );
}

const animate = keyframes`
50% {
background-color: white;
}
`;
const animatePairing = css`
  background-color: var(--success-base);
  animation: ${animate} 2s infinite;
`;

const StylePlayer = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: white;
  border-radius: var(--br-lg);
  padding: 15px 15px;
`;

const StyleInfo = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  font-family: Roboto-Regular;
  font-size: var(--tx-nl);
  color: var(--black-medium);
  letter-spacing: 1px;

  .key {
    font-size: var(--tx-sm);
    font-family: Roboto-Bold;
    margin-right: 5px;
    text-transform: capitalize;
  }

  .username .value {
    font-family: Roboto-Bold;
    color: var(--info-medium);
  }
`;

const StyleWristband = styled.div`
  flex: 1;
  max-width: 230px;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 5px 15px;
  display: grid;
  grid-template-columns: auto 40px;
  grid-template-rows: 1fr;
  grid-template-areas: "info signal";
  align-items: center;

  .wristband-info {
    letter-spacing: 1px;
    font-family: Roboto-Regular;
    font-size: var(--tx-nl);
    color: var(--black-medium);
  }

  .wristband-info .key {
    font-size: var(--tx-sm);
    font-family: Roboto-Bold;
    margin-right: 5px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .wristband-info .status .value {
    font-family: Roboto-Bold;
    color: var(--info-medium);
    text-transform: capitalize;
  }
`;

function getPlayerStatus(player) {
  if (player.wristband?.active) {
    return "registered";
  }

  return "empty";
}

const StyleWristbandSignal = styled(SvgBall)`
  cursor: pointer;
  background-color: ${({ wristbandColorCode }) => {
    if (!wristbandColorCode) {
      return "var(--grey-light)";
    }

    return mapWristbandColor("colorCode", wristbandColorCode);
  }};

  ${({ pairing }) => (pairing ? animatePairing : "")};
`;

function PairWristbandPlayerCard({ player }) {
  const { players, modelRegistrationRef, setModelRegistration } =
    useCtxRegistration();
  const { toggleWristbandPairing, removePlayerWristbandRegistrationQueue } =
    useAppCtx();

  return (
    <StylePlayer>
      <StyleInfo>
        <p className="username">
          <span className="key">username:</span>
          <span className="value">{player.username}</span>
        </p>
        <p>
          <span className="key">name:</span>
          <span className="value">{player.name}</span>
        </p>
        <p>
          <span className="key">surname:</span>
          <span className="value">{player.surname}</span>
        </p>
        <p>
          <span className="key">email:</span>
          <span className="value">{player.email}</span>
        </p>
      </StyleInfo>
      <StyleWristband pairing={player.wristband?.pairing}>
        <div className="wristband-info">
          <p className="status">
            <span className="key">status:</span>
            <span className="value">{getPlayerStatus(player)}</span>
          </p>
          <p className="number">
            <span className="key">rfid:</span>
            <span className="value">{player.wristband?.wristbandNumber}</span>
          </p>
          <p className="color">
            <span className="key">color:</span>
            <span className="value">
              {mapWristbandColor("colorCode", player.wristband?.wristbandColor)}
            </span>
          </p>
        </div>
        <div className="wristband-signal">
          <StyleWristbandSignal
            onClick={(e) => {
              console.log(player);
              toggleWristbandPairing(players, player, (err, registered) => {
                if (!registered) return;
                setModelRegistration({
                  players: modelRegistrationRef.current.players.map((player) =>
                    player.username === registered.username
                      ? registered
                      : {
                          ...player,
                          wristband: {
                            ...player.wristband,
                            pairing: false,
                          },
                        }
                  ),
                });
              }).then((queue) => setModelRegistration({ players: queue }));
            }}
            pairing={player.wristband?.pairing}
            className={"wristband"}
            wristbandColorCode={player.wristband?.wristbandColor}
          >
            <Signal />
          </StyleWristbandSignal>
        </div>
      </StyleWristband>
      <PlayerRemove
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          removePlayerWristbandRegistrationQueue(players, player).then(
            (queue) => setModelRegistration({ players: queue })
          );
        }}
      />
      <div className={"status"}></div>
    </StylePlayer>
  );
}

export { PairWristbandPlayerCard };
