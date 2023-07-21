import { InfoCardPlayerLayout } from "./InfoCardPlayerLayout.jsx";
import { StyledPlayerTuple } from "./PlayerTuple.jsx";
import { StyledPlayerTupleFullName } from "./PlayerTupleFullName.jsx";
import { StyledPlayerTupleState } from "./PlayerTupleState.jsx";
import { InfoCardWristbandReference } from "../wristbands/index.js";

function InfoCardPlayerReference({ className, ...props }) {
  return (
    <InfoCardPlayerLayout className={className} {...props}>
      <StyledPlayerTupleFullName
        label="fullname"
        style={{ gridRow: "1 / 2", gridColumn: "1 / 2", alignSelf: "center" }}
      />
      <StyledPlayerTuple
        style={{ gridRow: "2 / 3", gridColumn: "1 / 2", alignSelf: "center" }}
        name="username"
      />
      <StyledPlayerTuple
        name="email"
        style={{ gridRow: "3 / 4", gridColumn: "1 / 2", alignSelf: "center" }}
      />
      <StyledPlayerTupleState
        label="status"
        style={{ gridRow: "1 / 2", gridColumn: "2 / 3", justifySelf: "end" }}
      />
      <InfoCardWristbandReference
        style={{
          gridRow: "2 / 4",
          gridColumn: "2 / 3",
          backgroundColor: "white",
        }}
      />
    </InfoCardPlayerLayout>
  );
}

export { InfoCardPlayerReference };
