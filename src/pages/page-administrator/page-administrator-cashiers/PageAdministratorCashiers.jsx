import * as React from "react";
import styled from "styled-components";
import { FormCreateCashier } from "./FormCreateCashier.jsx";
import { useContextApp } from "/src/contexts/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useAfmachineAction } from "/src/hooks/index.js";

function PageAdministratorCashiers() {
  const { afmachine } = useContextApp();
  const { action: sRegisterCashier } = useAfmachineAction();

  function registerCashier(cashier, setForm) {
    sRegisterCashier.run(function () {
      return afmachine
        .registerCashier(cashier)
        .then(setForm.bind(null, "reset"))
        .catch(function (err) {
          setForm("setSubmit", false);
          throw err;
        });
    });
  }

  return (
    <StyledPageAdministratorCashiers>
      <PopoverAsyncState timePending={500} action={sRegisterCashier} />
      <FormCreateCashier onSubmit={registerCashier} />
    </StyledPageAdministratorCashiers>
  );
}

const StyledPageAdministratorCashiers = styled("div")`
  padding: 0 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export { PageAdministratorCashiers };
