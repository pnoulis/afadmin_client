import * as React from "react";
import { StoreProvideWristband } from "./StoreWristband.jsx";

function Wristband({ wristband, children, ...props }) {
  return (
    <StoreProvideWristband wristband={wristband} {...props}>
      {children}
    </StoreProvideWristband>
  );
}

export { Wristband };
