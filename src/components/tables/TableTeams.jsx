import * as React from "react";
import styled from "styled-components";
import { isFunction, filterObject } from "js_utils/misc";
import { TeamTuple } from "/src/components/teams/index.js";
import { DataTuple } from "/src/components/misc/index.js";
import { TableHead } from "./TableHead.jsx";
import { TableRow } from "./TableRow.jsx";
import { TableCell } from "./TableCell.jsx";

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

const FilteredDataKeys = {
  name: "",
  state: "",
  nplayers: "",
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

const teamRowProps = {
  team: {},
  include: [],
  exclude: [],
  ...teamDataKeys,
};

function TeamHead({ include, exclude }) {
  const filtered = React.useMemo(
    () =>
      filterObject(teamDataKeys, {
        include,
        exclude,
        asArray: true,
      }),
    [include, exclude],
  );
  return (
    <TableHead>
      <TableRow>
        {filtered.map(({ key, value }) => (
          <TableCell th key={key}>
            <StyledDataTuple>
              <DataTuple nov name={key} label={value.label} />
            </StyledDataTuple>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const StyledDataTuple = styled("p")`
  color: black;
  box-sizing: border-box;
  line-height: 20px;
  font-size: var(--tx-md);
  font-family: Saira;
  display: flex;
  margin-right: 20px;

  .key {
    font-weight: 600;
  }
`;

function TeamRow({ team, include, exclude }) {
  const filtered = React.useMemo(
    () =>
      filterObject(teamDataKeys, {
        include,
        exclude,
        asArray: true,
      }),
    [include, exclude],
  );
  return (
    <TableRow>
      {filtered.map(({ key, value }) => (
        <TableCell key={key}>
          <StyledDataTuple>
            <DataTuple
              nok
              src={team}
              name={key}
              label={value.label}
              gval={value.gval}
            />
          </StyledDataTuple>
        </TableCell>
      ))}
    </TableRow>
  );
}

export { TeamHead, TeamRow };
