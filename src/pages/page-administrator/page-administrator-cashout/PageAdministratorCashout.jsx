import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FormCashout } from "./FormCashout.jsx";
import { ButtonCashout } from "./ButtonCashout.jsx";
import { CashiersName } from "./CashiersName.jsx";
import { NumberOfPkgs } from "./NumberOfPkgs.jsx";
import { CommentArea } from "./CommentArea.jsx";
import { useSession } from "/src/hooks/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { displaypoperr } from "/src/utils/index.js";
import { renderDialog, ConfirmCashout } from "/src/components/dialogs/index.js";

function PageAdministratorCashout() {
  const { user, stats, comment, cashout, sCashout } = useSession();
  const navigate = useNavigate();
  return (
    <StyledPageAdministratorCashout
      fields={{
        cashierName: user?.username,
        npkgs: stats?.activatedPkgs,
        comment: comment || "",
      }}
      onSubmit={(fields, cb) => {
        renderDialog(
          null,
          ConfirmCashout,
          { cashierName: fields.cashierName },
          (yes) => {
            if (!yes) {
              cb("no");
              return;
            }
            cashout(fields)
              .then((res) => {
                cb(null);
              })
              .catch(cb);
          },
        );
      }}
    >
      <PopoverAsyncState
        timePending={500}
        action={sCashout}
        onSettled={(cashedout, response) => {
          if (!cashedout) {
            displaypoperr(response);
          } else {
            navigate("/login", { replace: true });
          }
        }}
      />
      <ButtonCashout style={{ gridArea: "header", justifySelf: "end" }} />
      <CashiersName style={{ gridArea: "username" }} />
      <CommentArea style={{ gridArea: "comments" }} />
      <NumberOfPkgs style={{ gridArea: "tuples" }} />
    </StyledPageAdministratorCashout>
  );
}

const StyledPageAdministratorCashout = styled(FormCashout)`
  padding: 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 600px 700px;
  grid-template-areas: "headear header" "username comments" "tuples comments";
  justify-content: space-between;
  align-content: space-between;
  align-items: start;
  gap: 70px 0;
`;

export { PageAdministratorCashout };
