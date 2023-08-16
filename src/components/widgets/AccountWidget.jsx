// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as PersonIcon } from "agent_factory.shared/ui/icons/person-filled.svg";
import { useHover } from "/src/hooks/index.js";

/**
 * AccountWidget
 * @example
 *
 */
function AccountWidget() {
  const [hovering, onHover] = useHover();
  return (
    <Dropdown>
      <DropdownTrigger {...onHover}>
        <Svg size="20">
          <PersonIcon />
        </Svg>
        <DropdownList open={true}>
          <DropdownOption>yolo</DropdownOption>
        </DropdownList>
      </DropdownTrigger>
    </Dropdown>
  );
}

const Dropdown = styled("ul")`
  display: flex;
  flex-flow: column nowrap;
`;

const DropdownTrigger = styled("li")`
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }

  position: relative;
`;

const DropdownList = styled("ul")`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: absolute;
  background-color: red;
  left: 0;
  transform: translateX(-50%);
  top: 40px;
`;
const DropdownOption = styled("li")``;

export { AccountWidget };
