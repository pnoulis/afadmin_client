import * as React from "react";
import { ContextProvideTable } from "./ContextTable.jsx";

function Table({ children }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState();
  const [selected, setSelected] = React.useState([]);

  return (
    <ContextProvideTable
      ctx={{ order, setOrder, orderBy, setOrderBy, selected, setSelected }}
    >
      <table>{children}</table>
    </ContextProvideTable>
  );
}

export { Table };
