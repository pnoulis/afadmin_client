// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { DateWidget } from "/src/components/widgets/index.js";

const SiteDateWidget = styled(DateWidget)`
  margin-right: auto;
  font-size: var(--tx-nl);
  font-weight: 600;

  .separator {
    margin: 0 5px 0 2px;
  }
`;

export { SiteDateWidget };
