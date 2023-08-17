// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { WidgetTime } from "/src/components/widgets/index.js";

const SiteWidgetTime = styled(WidgetTime)`
  font-size: var(--tx-nl);
  font-weight: 400;
  text-align: center;

  .hour,
  .minute,
  .second {
    display: inline-block;
    width: 35px;
  }
`;

export { SiteWidgetTime };
