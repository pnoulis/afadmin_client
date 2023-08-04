import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils/misc";

function ListPackages({ id, className, children, ...props }) {
  return (
    <StyleListPackages id={id} className={className} {...props}>
    <AncestorDimensions ancestor={`#${id}`}>
        <StyleScrollableList>{children}</StyleScrollableList>
      </AncestorDimensions>
    </StyleListPackages>
  );
}

const StyleListPackages = styled.section`
  border-radius: var(--br-nl);
  padding: 20px 0px 10px 0px;
  border: 1px solid var(--grey-light);
  background-color: var(--grey-light);
  box-shadow: var(--sd-2);
`;

const StyleScrollableList = styled.ul`
  overflow-y: auto;
  max-height: ${({ $height }) => `${$height ? $height : 0}px`};
  scrollbar-color: rgb(48, 25, 52) grey;
  scrollbar-gutter: stable both-edges;
  display: flex;
  flex-flow: column nowrap;
padding: 0 20px;
  gap: 20px;
`;

const StyleListPackagesItem = styled.li`
  box-sizing: border-box;
  border: 3px solid transparent;
  cursor: pointer;
  border-radius: var(--br-nl);
  background-color: white;
  font-family: NoirPro-Regular;
  color: white;
  font-size: var(--tx-md);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 55px;

  &:hover {
    border-color: var(--primary-medium);
  }

  ${({ selected }) => selected && "border-color: var(--primary-medium)"}
`;

export { ListPackages };
