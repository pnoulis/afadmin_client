import styled from "styled-components";
import { WidgetTrash } from "/src/components/widgets/index.js";
import {
  CssInfoCardPlayerLayout,
  StyledPlayerTuple,
  StyledPlayerTupleState,
} from "./index.js";
import { IndicatorWristbandSignal } from "/src/components/wristbands/index.js";
import { useContextPlayer } from "/src/contexts/index.js";

function ActionCardPlayerReference({
  onPlayerRemove: handlePlayerRemove,
  className,
  ...props
}) {
  const { player } = useContextPlayer();

  return player.seat ? (
    <StyleActionCardPlayerLayout className={className} {...props}>
      <StyledPlayerTuple
        name="username"
        nok
        style={{
          gridRow: "2 / 3",
          fontSize: "var(--tx-nl)",
          fontFamily: "NoirPro-Medium",
          justifySelf: "center",
          textAlign: "center",
        }}
      />
    </StyleActionCardPlayerLayout>
  ) : (
    <StyleActionCardPlayerLayout className={className} {...props}>
      <IndicatorWristbandSignal style={{ gridRow: "1 / 2" }} />
      <StyledPlayerTuple
        name="username"
        nok
        style={{
          gridRow: "2 / 3",
          fontSize: "var(--tx-nl)",
          fontFamily: "NoirPro-Medium",
          justifySelf: "center",
          textAlign: "center",
        }}
      />
      <StyledPlayerTupleState
        nok
        style={{
          gridRow: "3 / 4",
          width: "min-content",
        }}
      />
      <WidgetTrash
        onClick={handlePlayerRemove.bind(null, player)}
        tooltipContent="remove player"
        style={{ gridRow: "4 / 5" }}
      />
    </StyleActionCardPlayerLayout>
  );
}

const StyleActionCardPlayerLayout = styled.article`
  ${CssInfoCardPlayerLayout}
  width: 100%;
  height: 230px;
  background-color: var(--grey-light);
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content min-content 1fr;
  justify-items: center;
  padding: 15px 15px;
  align-content: center;
  align-items: center;
  row-gap: 10px;
  aspect-ratio: 1 / 1.01;
`;

export { ActionCardPlayerReference };
