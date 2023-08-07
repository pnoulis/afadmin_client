import * as React from "react";
import data from "./table/data.js";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import "./table/table.css";
import { TeamTableHead } from "./table/TeamTableHead.jsx";
import { getComparator, stableSort } from "./table/sorts.js";

function TableTeams() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("points");
  const [selected, setSelected] = React.useState([]);
  React.useEffect(() => {
    console.log(data);
  }, []);

  function handleTeamRowClick(teamName) {
    return {
      onClick: () => {
        const selectedIndex = selected.indexOf(teamName);
        let newSelected = [];

        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, teamName);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(newSelected + 1),
          );
        }
        setSelected(newSelected);
      },
    };
  }

  function handleSortClick(property) {
    return {
      onClick: () => {
        // These clauses ensure that the order by which the sorting
        // direction is toggled goes as follows:
        // 1. The sorting order direction starts of as 'asc'
        // 2. When handleSortClick is invoked the incoming property selected
        // as the ordering key (orderBy) is compared to the previous orderBy.
        // If it is the case that the currently orderBy and the next orderBy are
        // the same then order is toggled to 'desc'
        // Else the order is toggled to 'asc'
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
      },
    };
  }

  const sortedRows = React.useMemo(() => {
    return stableSort(data, getComparator(order, orderBy));
  }, [order, orderBy]);

  function isTeamSelected(teamName) {
    return selected.indexOf(teamName) !== -1;
  }

  function handleSelectAllClick() {}

  return (
    <div>
      <Table>
        <TeamTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleSortClick}
          rowCount={data.length}
        />
        <TableBody>
          {sortedRows.map((row, i) => {
            const isSelected = isTeamSelected(row.name);
            return (
              <TableRow
                hover
                {...handleTeamRowClick(row.name)}
                key={row.name}
                selected={isSelected}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.points}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan="4" variant="footer">
              {data.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default function ScratchTable() {
  return (
    <div>
      <h1>scratch table</h1>
      <div>
        <TableTeams />
      </div>
    </div>
  );
}
