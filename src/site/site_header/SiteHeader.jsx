import * as React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useSession } from "/src/hooks/index.js";
import { PopoverAsyncState } from "/src/components/async/PopoverAsyncState.jsx";
import { useNavigate } from "react-router-dom";
import { ButtonLogout } from "/src/components/buttons/index.js";

function SiteHeader() {
  const navigate = useNavigate();
  const { user, logout } = useSession();

  return (
    <StyledHeaderLayout>
      <PopoverAsyncState action={logout} />
      <ButtonLogout
        onClick={() => {
          logout().then(() => {
            navigate("/login");
          });
        }}
      />
    </StyledHeaderLayout>
  );
}

const StyledHeaderLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
padding: 5px 15px;
`;

export { SiteHeader };
