import * as React from "react";
import styled from "styled-components";
import { AwaitDevices } from "./AwaitDevices.jsx";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useRevalidator } from "react-router-dom";
import { AncestorDimensions } from "react_utils/misc";
import { useAfmachineAction } from "/src/hooks/index.js";

function PageAdministratorDevices() {
  return (
    <StyledPageAdministratorDevices>
      <AwaitDevices>
        {(devices, id) => {
          return (
            <AncestorDimensions ancestor="#panel-administrator-main">
              <ul>
                {devices.map((d, i) => (
                  <li key={i}>{d.deviceId}</li>
                ))}
              </ul>
            </AncestorDimensions>
          );
        }}
      </AwaitDevices>
    </StyledPageAdministratorDevices>
  );
}

const StyledPageAdministratorDevices = styled("div")`
  padding: 50px 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageAdministratorDevices };
