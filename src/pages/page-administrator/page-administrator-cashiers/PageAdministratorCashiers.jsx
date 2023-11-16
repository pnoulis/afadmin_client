import * as React from "react";
import styled from "styled-components";
import { FormCreateCashier } from "./FormCreateCashier.jsx";
import { useContextApp } from "/src/contexts/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useAfmachineAction } from "/src/hooks/index.js";
import { useTable } from "/src/components/tables/useTable.jsx";
import { ContextProvideTable } from "/src/components/tables/ContextTable.jsx";
import {
  stableSort,
  getComparator,
} from "/src/components/tables/table-liveview-teams/sorts.js";
import { TableCashiers } from "./TableCashiers.jsx";
import {
  WidgetTrash,
  WidgetPlus,
  WidgetArrow,
} from "/src/components/widgets/index.js";
import {
  renderDialog,
  ConfirmDeleteCashier,
  Alert,
} from "/src/components/dialogs/index.js";
import { AwaitCashiers } from "./AwaitCashiers.jsx";
import { useRevalidator } from "react-router-dom";

const dummyCashiers = [
  {
    id: 1,
    username: "pnoulis",
    email: "pnoulis@gmail.com",
  },
  {
    id: 2,
    username: "pavlos",
    email: "kapoutsis",
  },
  {
    id: 3,
    username: "grigoris",
    email: "kolasis",
  },
];

function parseCashiers(cashiers) {
  const ln = cashiers.length;
  const parsed = new Array(ln);
  for (let i = 0; i < ln; i++) {
    parsed[i] = cashiers[i];
    parsed[i].index = i + 1;
  }
  return parsed;
}

function PageAdministratorCashiers() {
  return (
    <StyledPageAdministratorCashiers>
      <AwaitCashiers>
        {(cashiers, id) => {
          return <CashiersControlPanel cashiers={cashiers} key={id} />;
        }}
      </AwaitCashiers>
    </StyledPageAdministratorCashiers>
  );
}

function CashiersControlPanel({ cashiers = [] }) {
  const { afmachine } = useContextApp();
  const { action: sCashierAction } = useAfmachineAction();
  const [viewTable, setViewTable] = React.useState(true);
  const rows = React.useMemo(() => parseCashiers(cashiers), [cashiers]);
  const ctxTable = useTable({
    rowId: "id",
    data: rows,
    rowsPerPage: 10,
    sort: stableSort,
    getComparator,
    orderBy: "index",
  });
  const revalidator = useRevalidator();

  function registerCashier(cashier, setForm) {
    sCashierAction.run(function () {
      return afmachine
        .registerCashier(cashier)
        .then(setForm.bind(null, "reset"))
        .catch(function (err) {
          setForm("setSubmit", false);
          throw err;
        })
    });
  }

  function deleteCashier() {
    const selected = ctxTable.selected;
    if (ctxTable.rowSelectedCount === 0) {
      return renderDialog(null, Alert, {
        title: "Delete cashier",
        msg: "No cashiers selected!",
      });
    }
    renderDialog(
      null,
      ConfirmDeleteCashier,
      {
        cashiers: selected.map((c) => c.username),
      },
      function (yes) {
        if (!yes) return;
        sCashierAction
          .run(function () {
            return Promise.all(
              selected.map((cashier) => afmachine.deleteCashier(cashier)),
            );
          })
      },
    );
  }

  function addCashier() {
    setViewTable((show) => !show);
  }

  return (
    <ContextProvideTable ctx={ctxTable}>
      <PopoverAsyncState
        timePending={500}
        action={sCashierAction}
        onSettled={() => {
          revalidator.revalidate();
        }}
      />
      {viewTable ? (
        <>
          <Cashierstoolbar
            onDeleteCashier={deleteCashier}
            onAddCashier={addCashier}
            style={{ gridArea: "header" }}
          />
          <TableCashiers />
        </>
      ) : (
        <>
          <StyledCashierstoolbar>
            <WidgetArrow
              onClick={addCashier}
              fColor="white"
              bColor="var(--primary-base)"
            />
          </StyledCashierstoolbar>
          <FormCreateCashier onSubmit={registerCashier} />
        </>
      )}
    </ContextProvideTable>
  );
}

function Cashierstoolbar({ onDeleteCashier, onAddCashier, style, className }) {
  return (
    <StyledCashierstoolbar>
      <WidgetTrash
        tooltipContent="delete cashier"
        onClick={onDeleteCashier}
        fColor="white"
        bColor="var(--primary-base)"
      />
      <WidgetPlus
        tooltipContent="add cashier"
        onClick={onAddCashier}
        fColor="white"
        bColor="var(--primary-base)"
      />
    </StyledCashierstoolbar>
  );
}

const StyledCashierstoolbar = styled("header")`
  width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  gap: 20px;
`;

const StyledPageAdministratorCashiers = styled("div")`
  padding: 25px 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export { PageAdministratorCashiers };
