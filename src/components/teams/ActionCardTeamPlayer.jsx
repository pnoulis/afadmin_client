import styled from "styled-components";
import { WidgetTrash } from "/src/components/widgets/index.js";
import {
  CssInfoCardPlayerLayout,
  StyledPlayerTuple,
  StyledPlayerTupleState,
} from "/src/components/players/index.js";
import { IndicatorWristbandSignal } from "/src/components/wristbands/index.js";
import { useContextPlayer } from "/src/contexts/index.js";

function ActionCardTeamPlayer({
  onPlayerRemove = () => {},
  className,
  ...props
}) {
  const { player } = useContextPlayer();
  return (
    <StyledActionCardTeamPlayer className={className} {...props}>
      <IndicatorWristbandSignal size="25px" style={{ gridRow: "1 / 2" }} />
      <StyledPlayerTuple
        name="username"
        nok
        style={{
          gridRow: "2 / 3",
          fontSize: "var(--tx-xs)",
          fontFamily: "NoirPro-Medium",
          justifySelf: "center",
          textAlign: "center",
        }}
      />
      <WidgetTrash
        onClick={onPlayerRemove.bind(null, player)}
        size="15px"
        tooltipContent="remove player"
        style={{ gridRow: "5 / 6" }}
      />
    </StyledActionCardTeamPlayer>
  );
}

const StyledActionCardTeamPlayer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border-radius: var(--br-lg);
  background-color: inherit;
  max-width: 150px;
  min-width: 100px;
`;

export { ActionCardTeamPlayer };
