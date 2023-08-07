import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

/*
  headercell.id = 'name,state,points...'
  headercell.numeric = 'false | true'
  headercell.disablePadding = 'false | true'
  headercell.label = 'Calories'
 */

function TeamTableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
} = {}) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>&#x2116;</TableCell>
        <TableCell>name</TableCell>
        <TableCell>state</TableCell>
        <TableCell
          align="left"
          sortDirection={orderBy === "points" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "points"}
            direction={orderBy === "points" ? order : "asc"}
            {...onRequestSort("points")}
          >
            points
            {orderBy === "points" ? (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export { TeamTableHead };
