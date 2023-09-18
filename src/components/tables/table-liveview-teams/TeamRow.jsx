import styled from "styled-components";
import { DataTuple } from "/src/components/misc/index.js";
import { TableRow } from "/src/components/tables/TableRow.jsx";
import { TableCell } from "/src/components/tables/TableCell.jsx";
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

function TeamRow({ team }) {
  return (
    <StyledTeamRow>
      <StyledTableData>
        <StyledTuple>
          <TeamTupleName nok noc src={team} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <TeamTupleState nok noc src={team} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <TeamTupleRosterSize nok noc value={team.roster} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <TeamTuplePoints nok noc value={team.points} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <TeamTupleTotalPkgs nok noc value={team.packages} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <TeamTupleTotalPkgsCost nok noc value={team.totalPkgsCost} />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleName
            nok
            noc
            src={team.activePackage}
            label="active package"
          />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleCost
            nok
            noc
            src={team.activePackage}
            value={team.activePkgCost}
            label="active package cost"
          />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleType
            nok
            noc
            src={team.activePackage}
            value={team.activePkgType}
            label="active package type"
          />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleAmount
            nok
            noc
            src={team.activePackage}
            value={team.activePkgAmount}
            label="active package amount"
          />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleRemainder
            nok
            noc
            src={team.activePackage}
            value={team.activePkgRemainder}
            label="active package remainder"
          />
        </StyledTuple>
      </StyledTableData>
      <StyledTableData>
        <StyledTuple>
          <PkgTupleTime
            nok
            noc
            src={team.activePackage}
            value={team.activePkgTimeStart}
            label="active package time start"
          />
        </StyledTuple>
      </StyledTableData>
    </StyledTeamRow>
  );
}

const StyledTableData = styled(TableCell)``;

const StyledTuple = styled("p")`
  // padding: 20px;
  // display: flex;
  // flex-flow: row wrap;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
`;

const StyledTeamRow = styled(TableRow)``;

export { TeamRow };
