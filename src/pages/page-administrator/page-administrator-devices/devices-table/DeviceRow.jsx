import * as React from "react";
import { DataTuple } from "/src/components/misc/index.js";
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  DeviceTupleId,
  DeviceTupleType,
  DeviceTupleTime,
} from "/src/components/devices/index.js";
import Checkbox from "@mui/material/Checkbox";

function DeviceRow({ device, isSelected, handleRowSelect }) {
  return (
    <TableRow
      role="checkbox"
      sx={{ cursor: "pointer" }}
      aria-checked={isSelected}
      selected={isSelected}
      onClick={handleRowSelect.bind(null, device)}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} />
      </TableCell>
      <TableCell align="center" component="th" scope="row">
        <StyledTuple>{device.index}</StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <DeviceTupleType device={device} nok noc />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <DeviceTupleId device={device} nok noc />
        </StyledTuple>
      </TableCell>

      <TableCell align="center">
        <StyledTuple>
          <DeviceTupleTime nok noc value={device.bootedTimestamp} />
        </StyledTuple>
      </TableCell>
    </TableRow>
  );
}

const StyledTuple = styled("p")`
  font-family: Saira;
  font-size: var(--tx-nl);
  font-weight: 600;
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;

  & .suffix {
    font-size: var(--tx-xs);
  }

  &.cost .suffix {
    font-size: var(--tx-lg);
  }
`;

export { DeviceRow };
