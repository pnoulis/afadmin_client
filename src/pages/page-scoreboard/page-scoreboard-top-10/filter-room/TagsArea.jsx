// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function TagsArea() {
  return <StyledTagsArea>tags area</StyledTagsArea>;
}

const StyledTagsArea = styled(TagsArea)`
background-color: red;
`;

export { TagsArea };
