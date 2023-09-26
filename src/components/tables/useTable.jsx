import * as React from "react";

function useTable({
  data,
  getComparator,
  sort,
  orderBy: defaultOrderBy = "",
  order: defaultOrder = "asc",
  rowsPerPage: initialRowsPerPage,
} = {}) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    initialRowsPerPage ?? 10,
  );

  function handleChangeOrderBy(newOrderBy) {
    const isasc = orderBy === newOrderBy && order === "asc";
    setOrder(isasc ? "desc" : "asc");
    setOrderBy(newOrderBy);
  }

  function handlePageChange(e, newPage) {
    setPage(newPage);
  }

  function handleRowsPerPageChange(e) {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
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
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
  };
}

export { useTable };
