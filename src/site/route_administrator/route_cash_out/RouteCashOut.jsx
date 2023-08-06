import * as React from "react";
import styled from "styled-components";
import { FormCashOut } from "./FormCashOut.jsx";
import { CommentArea } from "./CommentArea.jsx";
import { ButtonCashOut } from "./ButtonCashout.jsx";
import { CashiersName } from "./CashiersName.jsx";
import { NumberOfPkgs } from "./NumberOfPkgs.jsx";
import { useSession } from "/src/hooks/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { afmachine } from "/src/services/afmachine.js";

function RouteCashOut() {
  const {
    user,
    stats: { activatedPkgs } = {},
    comment,
    cashout,
  } = useSession();

  return (
    <FormCashOut
      fields={{
        cashierName: user.name,
        npkgs: activatedPkgs,
        comment,
      }}
      onSubmit={(form) => {
        cashout(form);
      }}
    >
      <PopoverAsyncState action={cashout} />
      <StyledRouteCashOut>
        <ButtonCashOut
          style={{ justifySelf: "end", gridRow: "1 / 2", gridColumn: "2 / 3" }}
        />
        <StyledInfo style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}>
          <CashiersName />
          <NumberOfPkgs style={{ marginLeft: "5px" }} />
        </StyledInfo>
        <CommentArea
          style={{ justifySelf: "end", gridRow: "2 / 3", gridColumn: "2 / 3" }}
        />
      </StyledRouteCashOut>
    </FormCashOut>
  );
}

const StyledInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
`;

const StyledRouteCashOut = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-template-rows: max-content minmax(50%, auto);
  gap: 50px;
  padding: 0 50px;
`;

export { RouteCashOut };
