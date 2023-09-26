// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const FiltersContainer = styled("section")`
  width: 60%;
  height: 120px;
  position: absolute;
  top: 25px;
  right: 25px;
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 400px 450px;
  justify-content: space-between;
  gap: 20px;
`;

export { FiltersContainer };
