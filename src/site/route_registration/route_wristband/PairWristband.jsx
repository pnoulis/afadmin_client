import * as React from "react";
import styled from "styled-components";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband_image.svg";
import { useCtxRegistration } from "/src/stores/index.js";
import { PairWristbandPlayerCard } from "./PairWristbandPlayerCard.jsx";

const StylePairWristband = styled.section`
  width: 100%;
  height: 100%;
  max-width: 700px;
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
`;

const StyleWristbandIcon = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(75%, -18%);

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
