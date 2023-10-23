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
import { parseTeams } from "../table-liveview-teams/parseTeams.js";
import { MUITeamRow } from "./MUITeamRow.jsx";
import { MUITeamHeaderRow } from "./MUITeamHeaderRow.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";
import { AncestorDimensions } from "react_utils/misc";
import { useNavigate } from "react-router-dom";
import { team as teamLink } from "/src/links.jsx";

function MUILiveViewTable({ teams = [], className, style }) {
  const navigate = useNavigate();
  const rows = React.useMemo(() => parseTeams(teams), [teams]);
  const ctxTable = useTable({
    data: rows,
    sort: stableSort,
    getComparator,
    orderBy: "index",
  });

  function handleTeamClick(teamName) {
    // debug(teamLink(teamName)?.path, 'encoded team name');
    navigate(teamLink(teamName)?.path, {
      relative: true,
    });
  }

  return (
    <ContextProvideTable ctx={ctxTable}>
      <StyledTableWrapper>
        <AncestorDimensions ancestor="#panel-live-view-main">
          <StyledTableContainer>
            <Table stickyHeader sx={{ backgroundColor: "white" }}>
              <TableHead>
                <MUITeamHeaderRow />
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
                    <MUITeamRow
                      index={i + 1}
                      key={team.name}
                      team={team}
                      onTeamClick={handleTeamClick.bind(null, team.name)}
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
  width: 100%;
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
    border: none;
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
    // min-height: ${({ $height }) => $height - 200 + "px"};
  }

  .MuiTableBody-root {
    // height: 300px;
  }

  .MuiTableHead-root {
    // height: 70px;
  }
  .MuiTableRow-root {
    cursor: pointer;
  }
  .MuiTableRow-root:hover {
    background-color: var(--secondary-light);
  }
`;
const StyledTable = styled(Table)``;

export { MUILiveViewTable };
