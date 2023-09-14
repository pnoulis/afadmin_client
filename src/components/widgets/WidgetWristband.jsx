// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css, keyframes } from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
// ------------------------------ project  ------------------------------- //
import { useContextWristband } from "/src/contexts/index.js";
import { ReactComponent as SignalIcon } from "agent_factory.shared/ui/icons/signal_1.svg";

function WidgetWristband({ size, tooltipContent, disable, className, style }) {
  const { state, wristband, handleWristbandToggle } = useContextWristband();
  tooltipContent ||=
    state === "unpaired" ? "pair wristband" : "unpair wristband";
  disable ??= !("pair" in wristband);

  return disable ? (
    <StyledWidgetWristband
      $disable={disable}
      style={style}
      size={size}
      className={className}
      $wristbandColor={wristband.getColor()}
    >
      <Svg>
        <SignalIcon />
      </Svg>
    </StyledWidgetWristband>
  ) : (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyledWidgetWristband
          $disable={disable}
          style={style}
          onClick={handleWristbandToggle}
          size={size}
          className={className}
          $pairing={state === "pairing"}
          $wristbandColor={wristband.getColor()}
        >
          <Svg>
            <SignalIcon />
          </Svg>
        </StyledWidgetWristband>
      }
    />
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
background-color: var(--grey-light);
`}
`;

const StyledWidgetWristband = styled.div`
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  padding: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  ${({ $disable }) =>
    !$disable &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}
  ${wristbandColor}
  ${({ $pairing }) => $pairing && animatePairing}
`;

export { WidgetWristband };
