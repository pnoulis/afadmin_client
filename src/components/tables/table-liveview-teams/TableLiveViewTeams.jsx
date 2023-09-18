import * as React from "react";
import styled from "styled-components";
import { useTable } from "/src/components/tables/useTable.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";
import { TableHead } from "/src/components/tables/TableHead.jsx";
import { TableBody } from "/src/components/tables/TableBody.jsx";
import { TableFooter } from "/src/components/tables/TableFooter.jsx";
import { TeamsHeader } from "./TeamsHeader.jsx";
import { TeamsFooter } from "./TeamsFooter.jsx";
import { TeamRow } from "./TeamRow.jsx";
import { stableSort, getComparator } from "./sorts.js";
import { parseTeams } from "./parseTeams.js";

function TableLiveViewTeams({ teams = [] }) {
  const rows = React.useMemo(() => parseTeams(teams), [teams]);
  const ctxTable = useTable({
    data: rows,
    sort: stableSort,
    getComparator,
  });
  return (
    <ContextProvideTable ctx={ctxTable}>
      <StyledTable>
        <TableHead>
          <TeamsHeader />
        </TableHead>
        <TableBody>
          {ctxTable.sortedData.map(function (team) {
            return <TeamRow key={team.name} team={team} />;
          })}
        </TableBody>
        <TableFooter>
          <TeamsFooter />
        </TableFooter>
      </StyledTable>
    </ContextProvideTable>
  );
}

const StyledTable = styled("table")`
  display: table;
  // max-width: 1000px;
  width: 90%;
  border-spacing: 30px;
  margin: auto;
  margin-top: 300px;
  box-shadow: var(--sd-9), var(--sd-8);
  border-radius: 20px;
  tr {
    border-bottom: 2px solid var(--grey-medium);
  }
`;

export { TableLiveViewTeams };
