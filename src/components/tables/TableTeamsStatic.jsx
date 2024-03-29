import * as React from "react";
import styled from "styled-components";
import { TableHead } from "./TableHead.jsx";
import { TableRow } from "./TableRow.jsx";
import { TableCell } from "./TableCell.jsx";
import { DataTuple } from "/src/components/misc/index.js";
import { TableSortButton } from "./TableSortButton.jsx";
import { useContextTable } from "./ContextTable.jsx";
import { t_mstom } from "agent_factory.shared/utils/misc.js";
import { formatTime } from "/src/utils/index.js";
import { teamDataMap } from "./teamDataMap.js";


const StyledTableCell = styled(TableCell)`
  background-color: #6e80cb;
  padding: 0 20px;
`;

function TableLiveViewRow({ row }) {
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

const StyledTableData = styled(TableCell)``;

export { TableLiveViewRow };
