import * as React from "react";
import { DataTuple } from "/src/components/misc/index.js";
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  TeamTupleName,
  TeamTupleState,
  TeamTupleRosterSize,
  TeamTuplePoints,
  TeamTupleTotalPkgs,
  TeamTupleTotalPkgsCost,
} from "/src/components/teams/data-tuples/index.js";
import {
  PkgTupleAmount,
  PkgTupleRemainder,
  PkgTupleTime,
  PkgTupleCost,
  PkgTupleType,
  PkgTupleName,
} from "/src/components/packages/data-tuples/index.js";

function MUITeamRow({ team, onTeamClick}) {
  return (
    <StyledTeamRow role="link" onClick={onTeamClick}>
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
          <TeamTupleRosterSize nok noc value={team.roster} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTuplePoints nok noc value={team.points} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <TeamTupleTotalPkgs nok noc value={team.packages} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple className="cost">
          <TeamTupleTotalPkgsCost nok noc value={team.totalPkgsCost} />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PkgTupleName
            nok
            noc
            src={team.activePackage}
            label="active package"
          />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple className="cost">
          <PkgTupleCost
            nok
            noc
            src={team.activePackage}
            value={team.activePkgCost}
            label="active package cost"
          />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PkgTupleType
            nok
            noc
            src={team.activePackage}
            value={team.activePkgType}
            label="active package type"
          />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PkgTupleAmount
            nok
            noc
            src={team.activePackage}
            value={team.activePkgAmount}
            label="active package amount"
          />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PkgTupleRemainder
            nok
            noc
            src={team.activePackage}
            value={team.activePkgRemainder}
            label="active package remainder"
          />
        </StyledTuple>
      </TableCell>
      <TableCell align="center">
        <StyledTuple>
          <PkgTupleTime
            nok
            noc
            src={team.activePackage}
            value={team.activePkgTimeStart}
            label="active package time start"
          />
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
