import * as React from "react";
import {
  Box,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  TablePagination,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { teamPackages } from "/src/site/links.jsx";
import { flattenObj } from "js_utils/misc";
import { TEAM_SCHEMA } from "agent_factory.shared/schemas.js";
import { TeamActions } from "./TeamActions.jsx";

function TeamsTableHeader() {
  return (
    <TableHead>
      <StyleTableHeadRow>
        <TableCell>actions</TableCell>
        <TableCell>name</TableCell>
        <TableCell>state</TableCell>
        <TableCell>players</TableCell>
        <TableCell>pkgs</TableCell>
        <TableCell>remaining pkgs</TableCell>
        <TableCell>cost</TableCell>
        <TableCell>current pkg</TableCell>
        <TableCell>missions</TableCell>
        <TableCell>missions played</TableCell>
        <TableCell>time started</TableCell>
        <TableCell>time playing</TableCell>
      </StyleTableHeadRow>
    </TableHead>
  );
}

const StyleTableHeadRow = styled(TableRow)`
  th {
    font-family: Roboto-Bold;
    font-size: var(--tx-nl);
    color: var(--primary-base);
    letter-spacing: 1px;
    text-transform: capitalize;
    text-align: center;
  }
`;

const StyleTableTeamsRow = styled(TableRow)`
  cursor: pointer;
  :hover {
    background-color: var(--info-subtle);
  }
  td {
    font-family: Roboto-Regular;
    font-size: var(--tx-nl);
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  .status {
    font-family: Roboto-Bold;
    font-size: var(--tx-nl);
    color: var(--black-base);
  }

  .number {
    font-size: var(--tx-md);
    font-family: Roboto-Bold;
    text-align: center;
  }
`;

function RowCellCurrentPackage({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  return (
    <TableCell className="number">{currentPackage?.name || "-"}</TableCell>
  );
}

function RowCellRemainingPackages({ row }) {
  const remainingPackages = row?.packages?.filter(
    (pkg) => pkg.active == false
  ).length;

  return <TableCell className="number">{remainingPackages || "-"}</TableCell>;
}

function RowCellTotalCost({ row }) {
  let totalCost = 0.0;
  row?.packages?.forEach((pkg) => (totalCost += pkg.cost ? pkg.cost : 0));

  return <TableCell className="number">{totalCost || "-"}</TableCell>;
}

function RowCellMissions({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  const missions = /mission/i.test(currentPackage.name);

  return (
    <TableCell className="number">
      {missions ? currentPackage?.missions : "-"}
    </TableCell>
  );
}

function RowCellMissionsPlayed({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  const missions = /mission/i.test(currentPackage.name);

  return (
    <TableCell className="number">
      {missions ? currentPackage?.missionsPlayed : "-"}
    </TableCell>
  );
}

const getTime = (() => {
  let currentLang;
  let locale;
  const time = new Map();
  return (timestamp, lang = "en-uS") => {
    const date = new Date(time || Date.now());
    if (typeof locale === "undefined" || lang !== currentLang) {
      locale = new Intl.DateTimeFormat(lang, {
        month: "short",
        weekday: "short",
        day: "numeric",
        hour: "2-digit",
        second: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      });
    }
    locale
      .formatToParts(timestamp)
      .forEach((el) => time.set(el.type, el.value));
    return Object.fromEntries(time);
  };
})();

function RowCellTimeStarted({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  const time = /time/i.test(currentPackage.name);
  const { hour, minute, literal } = getTime(currentPackage?.started);

  return (
    <TableCell className="number">
      {time ? `${hour}${literal}${minute}` : "-"}
    </TableCell>
  );
}

function RowCellTimePlaying({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  const time = /time/i.test(currentPackage.name);

  if (time && currentPackage?.started > 0) {
    const started = currentPackage?.started;
    var playing = Date.now() - started;
    playing /= 60000; // milliseconds to minutes
    playing = Math.round(playing);
  }

  return (
    <TableCell className="number">{time ? `${playing}mn` : "-"}</TableCell>
  );
}

function RowCellTimeRemaining({ row }) {
  const currentPackage =
    row?.packages?.find((pkg) => pkg.active != false) || {};

  const time = /time/i.test(currentPackage.name);

  return (
    <TableCell className="number">
      {time ? currentPackage?.started : "-"}
    </TableCell>
  );
}

function TableTeams({ rows }) {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handlePageChange = (e, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 20));
    setPage(0);
  };

  console.log(rows);

  return (
    <Box sx={{ height: 550, width: 1500 }}>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TeamsTableHeader />
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, i) => (
                <StyleTableTeamsRow
                  role="link"
                  tabIndex={0}
                  key={`${row.name}_${i}`}
                  onClick={() =>
                    navigate(teamPackages(row.name).path, {
                      relative: true,
                      state: row,
                    })
                  }
                >
                  <TableCell>
                    <TeamActions team={row} />
                  </TableCell>
                  <TableCell>{row?.name || "-"}</TableCell>
                  <TableCell>{row?.teamState || "-"}</TableCell>
                  <TableCell className="number">
                    {row?.currentRoster?.players?.length || "-"}
                  </TableCell>
                  <TableCell className="number">
                    {row?.packages?.length || "-"}
                  </TableCell>
                  <RowCellRemainingPackages row={row} />
                  <RowCellTotalCost row={row} />
                  <RowCellCurrentPackage row={row} />
                  <RowCellMissions row={row} />
                  <RowCellMissionsPlayed row={row} />
                  <RowCellTimeStarted row={row} />
                  <RowCellTimePlaying row={row} />
                </StyleTableTeamsRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rows={rows}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[20, 40, 80]}
          page={page}
          labelDisplayedRows={({ page }) => {
            return `Page: ${page + 1}`;
          }}
          showFirstButton={true}
          showLastButton={true}
        />
      </Paper>
    </Box>
  );
}

export { TableTeams };
