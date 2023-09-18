import * as React from "react";

function useTable({
  data,
  getComparator,
  sort,
  orderBy: defaultOrderBy = "",
  order: defaultOrder = "asc",
} = {}) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [selected, setSelected] = React.useState([]);

  function handleChangeOrderBy(newOrderBy) {
    const isasc = orderBy === newOrderBy && order === "asc";
    setOrder(isasc ? "desc" : "asc");
    setOrderBy(newOrderBy);
  }

  const sortedData = React.useMemo(
    () => sort?.(data, getComparator?.(order, orderBy)),
    [order, orderBy],
  );

  return {
    order,
    setOrder,
    orderBy,
    setOrderBy,
    selected,
    setSelected,
    handleChangeOrderBy,
    sortedData,
  };
}

export { useTable };
