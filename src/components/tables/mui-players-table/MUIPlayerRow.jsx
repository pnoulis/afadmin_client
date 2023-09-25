import * as React from "react";
import { DataTuple } from "/src/components/misc/index.js";
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  PlayerTupleName,
  PlayerTupleUsername,
  PlayerTupleSurname,
  PlayerTupleEmail,
} from "/src/components/players/data-tuples/index.js";

function MUIPlayerRow({ player }) {
  return (
    <StyledPlayerRow>
      <TableCell align="center" component="th" scope="row">
        <StyledTuple>{player.index}</StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PlayerTupleUsername nok noc src={player} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PlayerTupleName nok noc src={player} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PlayerTupleSurname nok noc src={player} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PlayerTupleEmail nok noc src={player} />
        </StyledTuple>
      </TableCell>
    </StyledPlayerRow>
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

const StyledPlayerRow = styled(TableRow)``;

export { MUIPlayerRow };
