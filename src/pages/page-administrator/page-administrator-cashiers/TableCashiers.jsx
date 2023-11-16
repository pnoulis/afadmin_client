import * as React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import { useTable } from "/src/components/tables/useTable.jsx";
import {
  stableSort,
  getComparator,
} from "/src/components/tables/table-liveview-teams/sorts.js";
import { useContextTable } from "/src/components/tables/ContextTable.jsx";
import { AncestorDimensions } from "react_utils/misc";
import { HeaderRow } from "./HeaderRow.jsx";
import { CashierRow } from "./CashierRow.jsx";

function TableCashiers({ className, style }) {
  const ctxTable = useContextTable();
  // const rows = React.useMemo(() => parseDevices(devices), [devices]);
  // const ctxTable = useTable({
  //   rowId: "deviceId",
  //   data: rows,
  //   rowsPerPage: 10,
  //   sort: stableSort,
  //   getComparator,
  //   orderBy: "index",
  // });

  function isSelected(row) {
    for (let i = 0; i < ctxTable.rowSelectedCount; i++) {
      if (ctxTable.selected[i]?.id === row.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <StyledTableWrapper>
      <AncestorDimensions ancestor="#panel-administrator-main">
        <StyledTableContainer>
          <Table stickyHeader sx={{ backgroundColor: "white" }}>
            <TableHead>
              <HeaderRow />
            </TableHead>
            <TableBody>
              {(ctxTable.rowsPerPage > 0
                ? ctxTable.sortedData.slice(
                    ctxTable.page * ctxTable.rowsPerPage,
                    ctxTable.page * ctxTable.rowsPerPage + ctxTable.rowsPerPage,
                  )
                : ctxTable.sortedData
              ).map(function (cashier, i) {
                return (
                  <CashierRow
                    index={i + 1}
                    key={cashier.id + i}
                    cashier={cashier}
                    isSelected={isSelected(cashier)}
                    handleRowSelect={ctxTable.handleRowSelect}
                  />
                );
              })}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </AncestorDimensions>
      <TablePagination
        component="div"
        showFirstButton
        showLastButton
        count={ctxTable.rowCount}
        rows={ctxTable.data}
        page={ctxTable.page}
        rowsPerPage={ctxTable.rowsPerPage}
        onPageChange={ctxTable.handlePageChange}
        onRowsPerPageChange={ctxTable.handleRowsPerPageChange}
      />
    </StyledTableWrapper>
  );
}

const StyledTableWrapper = styled("div")`

  height: 100%;
  position: relative;
  box-shadow: var(--sd-9);
  border-radius: var(--br-xl);

  .MuiTablePagination-root {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: white;
    border-bottom-left-radius: var(--br-xl);
    border-bottom-right-radius: var(--br-xl);
  }
  .MuiToolbar-root {
    border-top: 1px solid var(--grey-base);
    justify-content: end;
    padding: 0 35px 0 0;
    font-family: Saira;
    height: 30px;
  }

  .MuiTablePagination-spacer {
    display: none;
  }
  .MuiTablePagination-selectLabel {
    font-family: Saira;
    font-size: var(--tx-md);
    font-weight: 450;
  }
  .MuiTablePagination-select {
    font-family: Saira;
    font-size: var(--tx-md);
    font-weight: 450;
    position: relative;
    top: 5px;
  }
  .MuiTablePagination-displayedRows {
    font-family: Saira;
    font-size: var(--tx-md);
    font-weight: 450;
  }
`;

const StyledTableContainer = styled("div")`
  height: 100%;
  width: 100%;
  max-height: ${({ $height }) => $height - 170 + "px"};
  padding-bottom: 10px;
  position: relative;
  border-radius: var(--br-xl);
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-color: black var(--primary-base);
  scrollbar-gutter: stable both-edges;
  background-color: white;

  .MuiTable-root {
    // min-height: ${({ $height }) => $height + "px"};
  }

  .MuiTableHead-root {
    // height: 70px;
  }
  .MuiTableRow-root {
  }
  .MuiTableRow-root:hover {
    background-color: var(--secondary-light);
  }
`;

export { TableCashiers };
