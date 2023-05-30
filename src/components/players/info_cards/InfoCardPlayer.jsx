import * as React from "react";
import styled from "styled-components";
import { ContextProvidePlayer } from "/src/stores/player/ContextPlayer.jsx";

function InfoCardPlayer({
  useSchema = true,
  player,
  className,
  children,
  ...props
}) {
  return (
    <ContextProvidePlayer useSchema={useSchema} player={player}>
      <StyleInfoCardPlayer tabIndex={0} className={className} {...props}>
        {children}
      </StyleInfoCardPlayer>
    </ContextProvidePlayer>
  );
}

const StyleInfoCardPlayer = styled.article`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-radius: var(--br-xl);
  border: 3px solid transparent;
  gap: 20px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
`;

export { InfoCardPlayer, StyleInfoCardPlayer };
