import * as React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import { useTable } from "/src/components/tables/useTable.jsx";
import { stableSort, getComparator } from "../table-liveview-teams/sorts.js";
import { MUITop10HeaderRow } from "./MUITop10HeaderRow.jsx";
import { MUITop10Row } from "./MUITop10Row.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";
import { AncestorDimensions } from "react_utils/misc";

function parseTeams(teams) {
  const ln = teams.length;
  const parsed = new Array(ln);

  for (let i = 0; i < ln; i++) {
    parsed[i] = teams[i];
    parsed[i].index = i + 1;
    // // parse team[i] data for table
    // for (const [k, v] of Object.entries(teamDataMap)) {
    //   parsed[i][k] = v.gval?.(teams[i]) ?? teams[i][k];
    //   parsed[i].index = i + 1;
    // }
  }
  return parsed;
}

function MUITop10Table({ teams = [], className, style }) {
  const rows = React.useMemo(() => parseTeams(teams), [teams]);
  const ctxTable = useTable({
    data: rows,
    sort: stableSort,
    getComparator,
    orderBy: "index",
    rowsPerPage: 10,
  });
  debug(teams, 'mui top 10 table');

  return (
    <ContextProvideTable ctx={ctxTable}>
      <StyledTableWrapper>
        <AncestorDimensions ancestor="#panel-scoreboard-main">
          <StyledTableContainer>
            <Table stickyHeader sx={{ backgroundColor: "white" }}>
              <TableHead>
                <MUITop10HeaderRow />
              </TableHead>
              <TableBody>
                {(ctxTable.rowsPerPage > 0
                  ? ctxTable.sortedData.slice(
                      ctxTable.page * ctxTable.rowsPerPage,
                      ctxTable.page * ctxTable.rowsPerPage +
                        ctxTable.rowsPerPage,
                    )
                  : ctxTable.sortedData
                ).map(function (team, i) {
                  return (
                    <MUITop10Row
                      index={i + 1}
                      key={team.teamName + i}
                      team={team}
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
          count={teams.length}
          rows={teams}
          page={ctxTable.page}
          rowsPerPage={ctxTable.rowsPerPage}
          onPageChange={ctxTable.handlePageChange}
          onRowsPerPageChange={ctxTable.handleRowsPerPageChange}
        />
      </StyledTableWrapper>
    </ContextProvideTable>
  );
}

const StyledTableWrapper = styled("div")`
  width: 1000px;
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
  max-height: ${({ $height }) => $height - 100 + "px"};
  padding-bottom: 10px;
  position: relative;
  border-radius: var(--br-xl);
  overflow-y: scroll;
  overflow-x: scroll;
  scrollbar-color: black var(--primary-base);
  scrollbar-gutter: stable both-edges;
  background-color: white;

  .MuiTable-root {
    // min-height: ${({ $height }) => $height - 50 + "px"};
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
const StyledTable = styled(Table)``;

export { MUITop10Table };
