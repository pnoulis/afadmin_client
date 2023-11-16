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
          orderBy={"id"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "id"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="id" />
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"username"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "username"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="username" />
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"email"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "email"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="email" />
        </TableSortButton>
      </TableCell>
    </TableRow>
  );
}

export { HeaderRow };
