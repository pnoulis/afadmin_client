import { InfoCardWristbandLayout } from "./InfoCardWristbandLayout.jsx";
import { StyledWristbandTuple } from "./WristbandTuple.jsx";
import { StyledWristbandTupleState } from "./WristbandTupleState.jsx";
import { IndicatorWristbandSignal } from "./IndicatorWristbandSignal.jsx";

function InfoCardWristbandReference({ className, ...props }) {
  return (
    <InfoCardWristbandLayout className={className || ""} {...props}>
      <StyledWristbandTuple
        style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}
        name="number"
        label="rfid"
      />
      <StyledWristbandTupleState
        style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
        label="status"
      />
      <IndicatorWristbandSignal
        style={{ gridRow: "1 / 3", gridColumn: "2 / 3" }}
        size="20px"
      />
    </InfoCardWristbandLayout>
  );
}

export { InfoCardWristbandReference };
