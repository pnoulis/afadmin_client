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
      <TableCell>
        <TableSortButton
          orderBy={"name"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "name"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="name" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"state"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "state"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="status" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"roster"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "roster"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="players" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"points"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "points"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="points" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"packages"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "packages"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="total packages" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"totalPkgsCost"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "totalPkgsCost"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="total packages cost" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <StyledTuple>
          <DataTuple nov label="active package" />
        </StyledTuple>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"activePkgCost"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgCost"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package cost" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"activePkgType"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgType"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package type" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"activePkgAmount"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgAmount"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package amount" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"activePkgRemainder"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgRemainder"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package remainder" />
        </TableSortButton>
      </TableCell>
      <TableCell>
        <TableSortButton
          orderBy={"activePkgTimeStart"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgTimeStart"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package start time" />
        </TableSortButton>
      </TableCell>
    </TableRow>
  );
}

const StyledTuple = styled("p")`
  cursor: pointer;
  box-sizing: content-box;
  text-align: center;
  min-width: 130px;
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: var(--tx-nl);
  color: var(--primary-base);
  font-weight: 700;
  text-transform: uppercase;
`;

export { MUITeamHeaderRow };
