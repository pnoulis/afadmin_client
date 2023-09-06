// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelLiveView } from "./PanelLiveView.jsx";

function PageLiveView() {
  return (
    <PanelLiveView>
      <StyledPageMerge>
        <Outlet />
      </StyledPageMerge>
    </PanelLiveView>
  );
}

const StyledPageMerge = styled("div")`
  padding: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageLiveView };
