// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { WidgetDate } from "/src/components/widgets/index.js";

const SiteWidgetDate = styled(WidgetDate)`
  margin-right: auto;
  font-size: var(--tx-nl);
  font-weight: 400;

  .separator {
    margin: 0 5px 0 2px;
  }
`;

export { SiteWidgetDate };
