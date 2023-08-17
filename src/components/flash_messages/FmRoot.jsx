import * as React from "react";
import { StyleLayoutFmRoot } from "./Styles.jsx";

const FmRoot = React.forwardRef(({ className, ...props }, ref) => (
  <StyleLayoutFmRoot
    ref={ref}
    className={`${className || ""} flash-messages`}
    {...props}
  />
));

export { FmRoot };
