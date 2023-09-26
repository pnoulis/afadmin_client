import * as React from "react";
import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DataTuple } from "/src/components/misc/index.js";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { TableSortButton } from "/src/components/tables/TableSortButton.jsx";

function MUITop10HeaderRow() {
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
          orderBy={"teamName"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "teamName"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="name" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"created"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "created"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="time created" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"numberOfPlayers"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "numberOfPlayers"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="players" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"totalPoints"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "totalPoints"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="points" />
        </TableSortButton>
      </TableCell>
    </TableRow>
  );
}

export { MUITop10HeaderRow };
