import * as React from "react";
import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DataTuple } from "/src/components/misc/index.js";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { TableSortButton } from "/src/components/tables/TableSortButton.jsx";

function MUIPlayerHeaderRow() {
  const ctxTable = useContextTable();
  return (
    <TableRow>
      <TableCell align="center">
        <TableSortButton
          orderBy={"index"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "index"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <span>No</span>
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
          orderBy={"name"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "name"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="first name" />
        </TableSortButton>
      </TableCell>

      <TableCell align="center">
        <TableSortButton
          orderBy={"surname"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "surname"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="last name" />
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

export { MUIPlayerHeaderRow };
