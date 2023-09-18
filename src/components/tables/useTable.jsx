import * as React from "react";
import { isObject } from "js_utils/misc";

function useTable({
  data,
  getComparator,
  sort,
  orderBy: defaultOrderBy = "",
  order: defaultOrder = "asc",
  children,
} = {}) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [selected, setSelected] = React.useState([]);

  function handleChangeOrderBy(newOrderBy) {
    const oldOrderByLabel = isObject(orderBy) ? orderBy.label : orderBy;
    const newOrderByLabel = isObject(newOrderBy)
      ? newOrderBy.label
      : newOrderBy;
    const isasc = oldOrderByLabel === newOrderByLabel && order === "asc";
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
