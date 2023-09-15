import * as React from "react";
import styled from "styled-components";
import { TableHead } from "./TableHead.jsx";
import { TableRow } from "./TableRow.jsx";
import { TableCell } from "./TableCell.jsx";
import { DataTuple } from "/src/components/misc/index.js";
import { TableSortLabel }from './TableSortLabel.jsx';

const teamDataKeys = {
  name: {},
  state: {
    label: "status",
    gval: function (src) {
      return src.state?.name ?? src.state;
    },
  },
  roster: {
    label: "players",
    gval: function (src) {
      return src.roster?.size ?? src.roster.length;
    },
  },
  npkgs: "",
  totalCost: "",
  points: "",
  hasActivePkg: "",
  activePkgName: "",
  activePkgState: "",
  activePkgType: "",
  activePkgCost: "",
  activePkgAmount: "",
  activePkgRemainder: "",
  activePkgTimeStart: "",
  activePkgTimeEnd: "",
};

function TableLiveViewHeader() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>
          <TableSortLabel>
            <DataTuple nov name="name" label="name" />
          </TableSortLabel>
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov name="name" label="name" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov name="state" label="status" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov name="players" label="players" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov name="points" label="points" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="total packages" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="total packages cost" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package cost" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package type" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package status" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package amount" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package remainder" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package start time" />
        </StyledTableCell>
        <StyledTableCell th>
          <DataTuple nov label="active package end time" />
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
const StyledTableCell = styled(TableCell)`
  background-color: #6e80cb;
  width: 120px;
`;

function TableLiveViewRow({ row }) {
  return (
    <TableRow>
      <StyledTableData>
        <DataTuple nok src={row} name="name" {...teamDataKeys["name"]} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} name="state" {...teamDataKeys["state"]} />
      </StyledTableData>
      <StyledTableData>
        <DataTuple nok src={row} name="points" {...teamDataKeys["points"]} />
      </StyledTableData>
    </TableRow>
  );
}

const StyledTableData = styled(TableCell)``;

export { TableLiveViewHeader, TableLiveViewRow };
