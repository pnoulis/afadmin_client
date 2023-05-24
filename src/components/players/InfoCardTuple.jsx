import * as React from "react";
import styled from "styled-components";

function InfoCardTuple({ label, value, className, ...props }) {
  return (
    <StyleInfoCardTuple className={className || ""} {...props}>
      <span className="key">{label}</span>
      <span className="value">{value}</span>
    </StyleInfoCardTuple>
  );
}

const StyleInfoCardTuple = styled.div``;

export { InfoCardTuple };
