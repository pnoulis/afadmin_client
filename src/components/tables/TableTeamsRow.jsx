import styled from "styled-components";
import { DataTuple } from "/src/components/misc/index.js";
import { TableRow } from "./TableRow.jsx";
import { TableCell } from "./TableCell.jsx";
import { teamDataMap } from './teamDataMap.js';

function TableTeamsRow({ row }) {
  return (
    <TableRow>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.name} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.state} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.roster} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.points} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.packages} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.totalPkgsCost} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgName} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgCost} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgType} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgAmount} />
      </StyledTableData>

      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgRemainder} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} {...teamDataMap.activePkgTimeStart} />
      </StyledTableData>
    </TableRow>
  );
}

export { TableTeamsRow };
