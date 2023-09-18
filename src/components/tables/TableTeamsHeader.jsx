import styled from "styled-components";
import { DataTuple } from '/src/components/misc/index.js';
import { TableSortButton } from './TableSortButton.jsx';
import { TableCell } from "./TableCell.jsx";
import { TableHead } from "./TableHead.jsx";
import { TableRow } from "./TableRow.jsx";
import { useContextTable } from "./ContextTable.jsx";

function TableTeamsHeader() {
  const ctxTable = useContextTable();
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>
          <TableSortButton
            orderBy={"name"}
            order={ctxTable.order}
            active={ctxTable.orderBy === "name"}
            onSortButtonClick={ctxTable.handleChangeOrderBy}
          >
            <DataTuple nov label="name" />
          </TableSortButton>
        </StyledTableCell>
        <StyledTableCell>
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
      </TableRow>
    </TableHead>
  );
}

const StyledTableCell = styled(TableCell)`
  background-color: #6e80cb;
  padding: 0 20px;
`;

export { TableTeamsHeader };
