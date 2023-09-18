import styled from "styled-components";
import { TableRow } from "/src/components/tables/TableRow.jsx";
import { TableCell } from "/src/components/tables/TableCell.jsx";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { TableSortButton } from "/src/components/tables/TableSortButton.jsx";
import { DataTuple } from "/src/components/misc/index.js";

function TeamsHeader() {
  const ctxTable = useContextTable();
  return (
    <StyledTeamsHeaderRow>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"name"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "name"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="name" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"state"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "state"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="status" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"roster"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "roster"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="players" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"points"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "points"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="points" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"packages"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "packages"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="total packages" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"totalPkgsCost"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "totalPkgsCost"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="total packages cost" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <DataTuple nov label="active package" />
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"activePkgCost"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgCost"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package cost" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"activePkgType"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgType"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package type" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"activePkgAmount"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgAmount"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package amount" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"activePkgRemainder"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgRemainder"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package remainder" />
        </TableSortButton>
      </StyledTableCell>
      <StyledTableCell th>
        <TableSortButton
          orderBy={"activePkgTimeStart"}
          order={ctxTable.order}
          active={ctxTable.orderBy === "activePkgTimeStart"}
          onSortButtonClick={ctxTable.handleChangeOrderBy}
        >
          <DataTuple nov label="active package start time" />
        </TableSortButton>
      </StyledTableCell>
    </StyledTeamsHeaderRow>
  );
}

const StyledTableCell = styled(TableCell)`
  // background-color: #6e80cb;
`;

const StyledTeamsHeaderRow = styled(TableRow)`
  th {
    padding-top: 20px;
    padding-right: 20px;
  }

  th:first-child {
    padding-left: 20px;
  }
  th:last-child {
    padding-right: 20px;
  }
`;

const StyledTuple = styled("p")`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { TeamsHeader };
