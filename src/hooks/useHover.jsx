// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function useHover() {
  const [hovering, setIsHovering] = React.useState(false);

  return [
    hovering,
    {
      onMouseEnter: (e) => setIsHovering((prev) => !prev),
      onMouseLeave: (e) => setIsHovering((prev) => !prev),
    },
  ];
}

export { useHover };
