import * as React from "react";
import styled from "styled-components";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband_image.svg";
import { useCtxRegistration } from "/src/stores/index.js";
import { PairWristbandPlayerCard } from "./PairWristbandPlayerCard.jsx";

const StylePairWristband = styled.section`
  width: 700px;
  height: 600px;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  overflow: scroll;
  max-height: 550px;
  padding-right: 20px;
  background-color: var(--grey-base);
  padding: 15px 15px;
  border-radius: var(--br-lg);
  overflow: auto;
  position: relative;
`;

const StyleWristbandIcon = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  .handBracelet .circle {
    fill: var(--success-light);
  }

  z-index: 1;
`;

function PairWristband({ className, ...props }) {
  const { players } = useCtxRegistration();
  return (
    <StylePairWristband className={className} {...props}>
      {players.map((p) => {
        return <PairWristbandPlayerCard key={p.username} player={p} />;
      })}
      <StyleWristbandIcon>
        <WristbandIcon />
      </StyleWristbandIcon>
    </StylePairWristband>
  );
}

export { PairWristband };
