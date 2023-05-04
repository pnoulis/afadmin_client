import * as React from "react";
import styled from "styled-components";
import { SearchPlayerCombobox } from "./SearchPlayerCombobox.jsx";

const StyleSearchPlayer = styled.section`
  width: 100%;
`;

function SearchPlayer({ className, ...props }) {
  return (
    <StyleSearchPlayer className={className} {...props}>
      <SearchPlayerCombobox />
    </StyleSearchPlayer>
  );
}

export { SearchPlayer };
