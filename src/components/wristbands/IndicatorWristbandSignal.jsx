import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as SignalIcon } from "agent_factory.shared/ui/icons/signal_1.svg";
import { Svg } from "react_utils/svgs";
import { useContextWristband } from "/src/contexts/index.js";

function IndicatorWristbandSignal({ size, className, ...props }) {
  const { wristband, handleWristbandToggle } = useContextWristband();
  return (
    <StyleSignalIcon
      {...handleWristbandToggle()}
      $pairing={wristband.inState("pairing")}
      $wristbandColor={wristband.getColor()}
      size={size}
      className={className || ""}
      {...props}
    >
      <SignalIcon />
    </StyleSignalIcon>
  );
}

const animate = keyframes`
50% {
background-color: white;
border-color: var(--grey-light);
}
`;

const animatePairing = css`
  background-color: var(--success-base);
  border-color: var(--success-base);
  animation: ${animate} 2s infinite;
`;

const wristbandColor = css`
  ${({ $wristbandColor }) =>
    $wristbandColor
      ? `
border-color: ${$wristbandColor};
background-color: ${$wristbandColor};
fill: white;
`
      : `
background-color: var(--grey-base);
`}
`;

const StyleSignalIcon = styled(Svg)`
  display: flex;
  cursor: pointer;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  margin-left: auto;
  padding: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  ${wristbandColor}
  ${({ $pairing }) => $pairing && animatePairing}
`;

export { IndicatorWristbandSignal };
