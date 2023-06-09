import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Signal } from "agent_factory.shared/ui/icons/signal_1.svg";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";
import { SvgBall, Svg } from "react_utils/svgs";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";

function MemberWidget({
  onPlayerToggleWristbandPairing,
  onPlayerRemove,
  player,
  className,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <StyleMemberPairWristband
        onClick={() => onPlayerToggleWristbandPairing(player)}
        player={player}
      />
      <StyleMemberInfo player={player} />
      <MemberRemove onClick={() => onPlayerRemove(player)} />
    </div>
  );
}

function MemberPairWristband({ player, className, ...props }) {
  return (
    <div className={className} {...props}>
      <StyleWristbandSignalIcon
        pairing={player?.wristband?.pairing}
        wristbandColorCode={player?.wristband?.wristbandColor}
      >
        <Signal />
      </StyleWristbandSignalIcon>
    </div>
  );
}

function MemberInfo({ player, className, ...props }) {
  return (
    <div className={className} {...props}>
      <p className="username">
        <span className="key"></span>
        <span className="value">{player?.username}</span>
      </p>
    </div>
  );
}

function MemberRemove({ className, ...props }) {
  return (
    <div className={className} {...props}>
      <StyleTrashIcon>
        <TrashIcon />
      </StyleTrashIcon>
    </div>
  );
}

const StyleMemberWidget = styled(MemberWidget)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const animate = keyframes`
50% {
background-color: white;
border-color: var(--grey-subtle);
}
`;
const animatePairing = css`
  background-color: var(--success-base);
  border-color: var(--success-base);
  animation: ${animate} 2s infinite;
`;

const StyleWristbandSignalIcon = styled(SvgBall)`
  cursor: pointer !important;
  box-sizing: border-box !important;
  width: 75px !important;
  height: 75px !important;
  padding: 12px !important;
  border: 3px solid transparent;

  ${({ wristbandColorCode }) => {
    if (wristbandColorCode) {
      const color = mapWristbandColor("colorCode", wristbandColorCode);
      return `
border-color: ${color};
background-color: ${color};
`;
    } else {
      return `
border-color: var(--primary-subtle);
background-color: var(--grey-subtle);
`;
    }
  }}
  ${({ pairing }) => (pairing ? animatePairing : "")};
`;

const StyleMemberPairWristband = styled(MemberPairWristband)`
  margin-bottom: 10px;
`;

const StyleMemberInfo = styled(MemberInfo)`
  letter-spacing: 1px;
  font-family: Roboto-Bold;
  font-size: var(--tx-nl);
  color: var(--grey-strong);
  margin-bottom: 25px;

  .username {
    position: relative;
    left: 3px;
  }
`;

const StyleTrashIcon = styled(SvgBall)`
  cursor: pointer;
  width: 30px !important;
  height: 30px !important;
  padding: 10px !important;
  background-color: var(--grey-subtle);
  path {
    fill: var(--primary-subtle);
  }

  &:hover {
    background-color: var(--grey-light);
  }
`;

export { StyleMemberWidget as MemberWidget };
