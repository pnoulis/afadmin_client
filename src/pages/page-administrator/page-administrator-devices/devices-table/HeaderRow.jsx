import * as React from "react";
import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DataTuple } from "/src/components/misc/index.js";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { TableSortButton } from "/src/components/tables/TableSortButton.jsx";
import Checkbox from "@mui/material/Checkbox";

function HeaderRow() {
  const ctxTable = useContextTable();
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={
            ctxTable.rowSelectedCount > 0 &&
            ctxTable.rowSelectedCount < ctxTable.rowCount
          }
          checked={
            ctxTable.rowCount > 0 &&
            ctxTable.rowSelectedCount === ctxTable.rowCount
          }
          onChange={ctxTable.handleRowSelectAll}
        />
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy="index"
          order={ctxTable.order}
          active={ctxTable.orderBy === "index"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <span>No</span>
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"deviceType"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "deviceType"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="device type" />
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"deviceId"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "deviceId"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="device id" />
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"bootedTimestamp"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "bootedTimestamp"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="time booted" />
        </TableSortButton>
      </TableCell>
    </TableRow>
  );
}

export { HeaderRow };
