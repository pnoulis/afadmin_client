import * as React from "react";
import {
  PackageTuple,
  StyledPackageTuple,
  InfoCardPackageLayout,
  StyledPackageTupleState,
  StyledPackageTupleCost,
  StyledPackageTupleTime,
  StyledPackageTupleAmount,
  StyledPackageTupleRemainder,
} from "/src/components/packages/index.js";

function InfoCardPackageReference({ className, ...props }) {
  return (
    <InfoCardPackageLayout className={className} {...props}>
      <StyledPackageTuple
        style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}
        name="type"
      />
      <StyledPackageTupleState
        style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
      />
      <StyledPackageTuple
        name="id"
        style={{ gridRow: "2/3", gridColumn: "2 / 3" }}
      />
      <StyledPackageTupleCost
        style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
      />
      <StyledPackageTupleTime
        style={{ gridRow: "3 / 4", gridColumn: "1 / 2" }}
        name="t_start"
        label="started"
      />
      <StyledPackageTupleTime
        style={{ gridRow: "4 / 5", gridColumn: "1 / 2" }}
        name="t_end"
        label="finished"
      />
      <StyledPackageTupleAmount
        style={{ gridRow: " 3 / 4", gridColumn: "2 / 3" }}
      />
      <StyledPackageTupleRemainder
        style={{ gridRow: "4 / 5", gridColumn: "2 / 3" }}
      />
    </InfoCardPackageLayout>
  );
}

export { InfoCardPackageReference };
