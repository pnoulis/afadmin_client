// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const FiltersContainer = styled("section")`
  width: 60%;
  height: 250px;
  position: absolute;
  top: 25px;
  right: 25px;
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 350px 1fr;
  justify-content: end;
  gap: 20px;
`;

export { FiltersContainer };
