import * as React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
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

function MUILiveViewTable({ teams = [], className, style }) {
  const rows = React.useMemo(() => parseTeams(teams), [teams]);
  const ctxTable = useTable({
    data: rows,
    sort: stableSort,
    getComparator,
  });
  return (
    <ContextProvideTable ctx={ctxTable}>
      <AncestorDimensions ancestor="#panel-live-view-main">
        <StyledTableContainer>
          <Table stickyHeader sx={{ backgroundColor: "white" }}>
            <TableHead>
              <MUITeamHeaderRow />
            </TableHead>
            <TableBody>
              {ctxTable.sortedData.map(function (team) {
                return <MUITeamRow key={team.name} team={team} />;
              })}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </AncestorDimensions>
    </ContextProvideTable>
  );
}

const StyledTableContainer = styled("div")`
  height: 100%;
  width: 100%;
  overflow: scroll;
  scrollbar-color: black var(--primary-base);
  scrollbar-gutter: stable both-edges;
  box-shadow: var(--sd-9);
  border-radius: var(--br-xl);
  max-height: ${({ $height }) => $height - 50 + "px"};
`;
const StyledTable = styled(Table)``;

export { MUILiveViewTable };
