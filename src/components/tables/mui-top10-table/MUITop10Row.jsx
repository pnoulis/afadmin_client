import * as React from "react";
import { DataTuple } from "/src/components/misc/index.js";
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  TeamTupleName,
  TeamTupleCreated,
  TeamTupleState,
  TeamTupleRosterSize,
  TeamTuplePoints,
  TeamTupleMissionsPlayed,
  TeamTupleMissionsWon,
  TeamTupleMissionsLost,
} from "/src/components/teams/data-tuples/index.js";

function MUITop10Row({ team }) {
  return (
    <StyledTeamRow>
      <TableCell align="center" component="th" scope="row">
        <StyledTuple>{team.index}</StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleName nok noc value={team.teamName} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleCreated date nok noc value={team.created} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleRosterSize nok noc value={team.numberOfPlayers} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTuplePoints nok noc value={team.totalPoints} />
        </StyledTuple>
      </TableCell>
    </StyledTeamRow>
  );
}

const StyledTuple = styled("p")`
  font-family: Saira;
  font-size: var(--tx-nl);
  font-weight: 600;
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;

  & .suffix {
    font-size: var(--tx-xs);
  }

  &.cost .suffix {
    font-size: var(--tx-lg);
  }
`;

const StyledTeamRow = styled(TableRow)``;

export { MUITop10Row };
