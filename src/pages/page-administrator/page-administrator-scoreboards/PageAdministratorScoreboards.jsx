import * as React from "react";
import styled from "styled-components";
import { AwaitScoreboardDevices } from "./AwaitScoreboardDevices.jsx";
import { ComboboxSelectScoreboardView } from "./ComboboxSelectScoreboardView.jsx";
import { DeviceActionCard } from "./DeviceActionCard.jsx";
import { stubScoreboardDevices } from "./stubScoreboardDevices.js";
import { AncestorDimensions } from "react_utils/misc";
import { useAfmachineAction } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useRevalidator } from "react-router-dom";
import { useAfmachineSubscription } from "/src/hooks/index.js";
import { smallid } from "js_utils/uuid";

function PageAdministratorScoreboards() {
  const revalidator = useRevalidator();
  const { action: sSetDeviceView } = useAfmachineAction(
    afmachine.setScoreboardViews,
  );

  function handleDeviceViewChange(deviceId, view) {
    debug('handle device view change');
    sSetDeviceView.run(() =>
      afmachine.setScoreboardViews({
        deviceId,
        view,
      }),
    );
  }
  useAfmachineSubscription("onScoreboardDevicesUpdate", () => {
    console.log("should revalidate");
    // revalidator.revalidate();
  });

  return (
    <StyledPageAdministratorScoreboards>
      <PopoverAsyncState timePending={500} action={sSetDeviceView} />
      <AwaitScoreboardDevices>
        {(scoreboards) => {
          return (
            <AncestorDimensions ancestor="#panel-administrator-main">
              <ListDevices>
                {scoreboards.devices.map((device, i) => (
                  <DeviceActionCard
                    key={device?.deviceId + i}
                    onChangeDeviceView={handleDeviceViewChange}
                    device={device}
                    views={scoreboards.views}
                  />
                ))}
              </ListDevices>
            </AncestorDimensions>
          );
        }}
      </AwaitScoreboardDevices>
    </StyledPageAdministratorScoreboards>
  );
}

const ListDevices = styled("ul")`
  width: 100%;
  height: 100%;
  max-height: ${({ $height }) => $height + "px"};
  max-width: ${({ $width }) => $width - 200}px;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  gap: 50px;
`;

const StyledPageAdministratorScoreboards = styled("div")`
  padding: 50px 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageAdministratorScoreboards };
