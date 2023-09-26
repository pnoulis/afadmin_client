// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ComboboxSelectScoreboardView } from "./ComboboxSelectScoreboardView.jsx";

function DeviceActionCard({
  onChangeDeviceView: handleChangeDeviceView = () => {},
  views,
  device,
  as,
  className,
  style,
}) {
  return (
    <StyledDeviceActionCard as={as} className={className} style={style}>
      <p>{device?.deviceId}</p>
      <ComboboxSelectScoreboardView
        onSelect={(view) => handleChangeDeviceView(device.deviceId, view)}
        defaultLabel={device?.status}
        views={views}
      />
    </StyledDeviceActionCard>
  );
}

const StyledDeviceActionCard = styled("article")`
  flex: 0 0 200px;
  height: 150px;
  background-color: var(--grey-base);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  border-radius: var(--br-lg);
  font-family: Saira;

  & > p {
    font-weight: 550;
    color: var(--primary-base);
    text-transform: uppercase;
    text-align: center;
    font-size: var(--tx-nl);
    letter-spacing: 1px;
  }
`;

export { DeviceActionCard };
