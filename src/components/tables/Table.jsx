import * as React from "react";
import { ContextProvideTable } from "./ContextTable.jsx";

function Table({
  data,
  getComparator,
  sortingAlgorithm,
  orderBy: defaultOrderBy = "",
  order: defaultOrder = "asc",
  children,
}) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [selected, setSelected] = React.useState([]);

  function handleChangeOrderBy(newOrderBy) {
    const isasc = orderBy === newOrderBy && order === "asc";
    setOrder(isasc ? "desc" : "asc");
    setOrderBy(newOrderBy);
  }

  const sortedData = React.useMemo(
    () => sortingAlgorithm?.(data, getComparator?.(order, orderBy)) || data,
    [order, orderBy],
  );

  return (
    <ContextProvideTable
      ctx={{
        order,
        setOrder,
        orderBy,
        setOrderBy,
        selected,
        setSelected,
        handleChangeOrderBy,
        sortedData,
      }}
    >
      <table>{children}</table>
    </ContextProvideTable>
  );
}

export { Table };
