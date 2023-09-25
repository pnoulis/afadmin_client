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

function MUITeamRow({ team }) {
  return (
    <StyledTeamRow>
      <TableCell align="center" component="th" scope="row">
        <StyledTuple>{team.index}</StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleName nok noc src={team} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleState nok noc src={team} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleRosterSize nok noc src={team} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleMissionsPlayed nok noc src={team} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleMissionsWon nok noc src={team} />
        </StyledTuple>
      </TableCell>

      <TableCell align="center">
        <StyledTuple>
          <TeamTupleMissionsLost nok noc src={team} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTuplePoints nok noc src={team} />
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

export { MUITeamRow };
