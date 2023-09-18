import * as React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { useTable } from "/src/components/tables/useTable.jsx";
import { stableSort, getComparator } from "../table-liveview-teams/sorts.js";
import { parseTeams } from "../table-liveview-teams/parseTeams.js";
import { MUITeamRow } from "./MUITeamRow.jsx";
import { MUITeamHeaderRow } from "./MUITeamHeaderRow.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";

function MUILiveViewTable({ teams = [], className, style }) {
  const rows = React.useMemo(() => parseTeams(teams), [teams]);
  const ctxTable = useTable({
    data: rows,
    sort: stableSort,
    getComparator,
  });
  return (
    <ContextProvideTable ctx={ctxTable}>
      <StyledTable className={className} style={style}>
        <TableHead>
          <MUITeamHeaderRow />
        </TableHead>
        <TableBody>
          {ctxTable.sortedData.map(function (team) {
            return <MUITeamRow key={team.name} team={team} />;
          })}
        </TableBody>
      </StyledTable>
    </ContextProvideTable>
  );
}

const StyledTable = styled(Table)`
  box-shadow: var(--sd-9), var(--sd-8);
  border-radius: 10px;
  margin: auto;
  margin-top: 100px;
`;

export { MUILiveViewTable };
