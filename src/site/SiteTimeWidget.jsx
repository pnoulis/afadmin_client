// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { TimeWidget } from "/src/components/widgets/index.js";

const SiteTimeWidget = styled(TimeWidget)`
  font-size: var(--tx-nl);
  font-weight: 600;
  text-align: center;

  .hour,
  .minute,
  .second {
    display: inline-block;
    width: 35px;
  }
`;

export { SiteTimeWidget };
