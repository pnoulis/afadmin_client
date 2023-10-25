import * as React from "react";
import styled from "styled-components";
import { AwaitDevices } from "./AwaitDevices.jsx";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useRevalidator } from "react-router-dom";
import { AncestorDimensions } from "react_utils/misc";
import { useAfmachineAction } from "/src/hooks/index.js";
import { DevicesTable } from "./devices-table/DevicesTable.jsx";
import { useTable } from "/src/components/tables/useTable.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";
import {
  stableSort,
  getComparator,
} from "/src/components/tables/table-liveview-teams/sorts.js";
import {
  WidgetRestart,
  WidgetWakeup,
  WidgetShutdown,
} from "/src/components/widgets/index.js";
import { useContextApp } from "/src/contexts/index.js";
import { delay } from "js_utils/misc";
import {
  renderDialog,
  ConfirmDeviceAction,
} from "/src/components/dialogs/index.js";


const fkDevices = [
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD1",
    "deviceId": "scor1",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967035,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD2",
    "deviceId": "scor2",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967041,
  },
  {
    "deviceType": "REGISTRATION_SCREEN",
    "roomType": "ADMINISTRATION1",
    "deviceId": "001",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698046156272,
  },
  {
    "deviceType": "RPI_READER",
    "roomType": "ADMINISTRATION1",
    "deviceId": "ADMINISTRATION1Reader",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698044846927,
  },

  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD1",
    "deviceId": "scor1",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967035,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD2",
    "deviceId": "scor2",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967041,
  },
  {
    "deviceType": "REGISTRATION_SCREEN",
    "roomType": "ADMINISTRATION1",
    "deviceId": "001",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698046156272,
  },
  {
    "deviceType": "RPI_READER",
    "roomType": "ADMINISTRATION1",
    "deviceId": "ADMINISTRATION1Reader",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698044846927,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD1",
    "deviceId": "scor1",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967035,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD2",
    "deviceId": "scor2",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967041,
  },
  {
    "deviceType": "REGISTRATION_SCREEN",
    "roomType": "ADMINISTRATION1",
    "deviceId": "001",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698046156272,
  },
  {
    "deviceType": "RPI_READER",
    "roomType": "ADMINISTRATION1",
    "deviceId": "ADMINISTRATION1Reader",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698044846927,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD1",
    "deviceId": "scor1",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967035,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD2",
    "deviceId": "scor2",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967041,
  },
  {
    "deviceType": "REGISTRATION_SCREEN",
    "roomType": "ADMINISTRATION1",
    "deviceId": "001",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698046156272,
  },
  {
    "deviceType": "RPI_READER",
    "roomType": "ADMINISTRATION1",
    "deviceId": "ADMINISTRATION1Reader",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698044846927,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD1",
    "deviceId": "scor1",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967035,
  },
  {
    "deviceType": "SCOREBOARD_SCREEN",
    "roomType": "SCOREBOARD2",
    "deviceId": "scor2",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1697694967041,
  },
  {
    "deviceType": "REGISTRATION_SCREEN",
    "roomType": "ADMINISTRATION1",
    "deviceId": "001",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698046156272,
  },
  {
    "deviceType": "RPI_READER",
    "roomType": "ADMINISTRATION1",
    "deviceId": "ADMINISTRATION1Reader",
    "macAddress": null,
    "ipAddress": null,
    "bootedTimestamp": 1698044846927,
  }
];

function PageAdministratorDevices() {
  return (
    <StyledPageAdministratorDevices>
      <AwaitDevices>
        {(devices, id) => {
          return <DevicesControlPanel devices={devices} key={id} />;
        }}
      </AwaitDevices>
    </StyledPageAdministratorDevices>
  );
}

function parseDevices(devices) {
  const ln = devices.length;
  const parsed = new Array(ln);
  for (let i = 0; i < ln; i++) {
    parsed[i] = devices[i];
    parsed[i].index = i + 1;
  }
  return parsed;
}

function DevicesControlPanel({ devices = [] }) {
  const { action: sDeviceAction } = useAfmachineAction();
  const ctxApp = useContextApp();
  const rows = React.useMemo(() => parseDevices(devices), [devices]);
  const ctxTable = useTable({
    rowId: "deviceId",
    data: rows,
    rowsPerPage: 10,
    sort: stableSort,
    getComparator,
    orderBy: "index",
  });

  function handleRestart() {
    if (ctxTable.rowSelectedCount > 0) {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "restart", message: "restart selected devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return Promise.all(
              ctxTable.selected.map((device) =>
                ctxApp.afmachine.restartDevice(device),
              ),
            );
          });
        },
      );
    } else {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "restart", message: "restart ALL devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return ctxApp.afmachine.restartDevice();
          });
        },
      );
    }
  }

  function handleShutdown() {
    if (ctxTable.rowSelectedCount > 0) {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "shutdown", message: "shutdown selected devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return Promise.all(
              ctxTable.selected.map((device) =>
                ctxApp.afmachine.shutdownDevice(device),
              ),
            );
          });
        },
      );
    } else {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "shutdown", message: "shutdown ALL devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return ctxApp.afmachine.shutdownDevice();
          });
        },
      );
    }
  }

  function handleWakeup() {
    if (ctxTable.rowSelectedCount > 0) {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "boot", message: "boot selected devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return Promise.all(
              ctxTable.selected.map((device) =>
                ctxApp.afmachine.wakeupDevice(device),
              ),
            );
          });
        },
      );
    } else {
      renderDialog(
        null,
        ConfirmDeviceAction,
        { action: "boot", message: "boot ALL devices?" },
        function (yes) {
          if (!yes) return;
          sDeviceAction.run(function () {
            return ctxApp.afmachine.wakeupDevice();
          });
        },
      );
    }
  }

  return (
    <ContextProvideTable ctx={ctxTable}>
      <PopoverAsyncState timePending={500} action={sDeviceAction} />
      <DevicesToolbar
        onWakeup={handleWakeup}
        onShutdown={handleShutdown}
        onRestart={handleRestart}
        style={{ gridArea: "header" }}
      />
      <DevicesTable style={{ gridArea: "table" }} />
    </ContextProvideTable>
  );
}

function DevicesToolbar({ onWakeup, onShutdown, onRestart, style, className }) {
  return (
    <StyledDevicesToolbar>
      <WidgetRestart
        onClick={onRestart}
        fColor="white"
        bColor="var(--primary-base)"
      />
      <WidgetShutdown
        onClick={onShutdown}
        fColor="white"
        bColor="var(--primary-base)"
      />
      <WidgetWakeup
        onClick={onWakeup}
        fColor="white"
        bColor="var(--primary-base)"
      />
    </StyledDevicesToolbar>
  );
}

const StyledDevicesToolbar = styled("header")`
  width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  gap: 20px;
`;

const StyledPageAdministratorDevices = styled("div")`
  padding: 25px 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export { PageAdministratorDevices };
