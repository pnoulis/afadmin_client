import * as React from "react";
import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DataTuple } from "/src/components/misc/index.js";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { TableSortButton } from "/src/components/tables/TableSortButton.jsx";

function MUITeamHeaderRow() {
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
          orderBy={"name"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "name"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "200px" }}
        >
          <DataTuple nov label="name" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"state"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "state"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
          style={{ minWidth: "70px" }}
        >
          <DataTuple nov label="status" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"roster"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "roster"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="players" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"played"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "played"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="played" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"wins"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "wins"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="wins" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"losses"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "losses"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="losses" />
        </TableSortButton>
      </TableCell>
      <TableCell align="center">
        <TableSortButton
          orderBy={"points"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "points"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="points" />
        </TableSortButton>
      </TableCell>
    </TableRow>
  );
}

const StyledTuple = styled("p")`
  text-align: center;
  font-size: var(--tx-sm);
  color: var(--primary-base);
  font-weight: 700;
  text-transform: uppercase;
  font-family: Saira;
`;

export { MUITeamHeaderRow };
