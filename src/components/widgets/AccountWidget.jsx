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
import { Logout } from "/src/components/widgets/AccountWidgetButtons.jsx";

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
        <p>username</p>
        <Svg>
          <PersonIcon />
        </Svg>
        <DropdownList open={hovering}>
          <DropdownOption>
            <Logout />
          </DropdownOption>
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
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  padding: 5px;
  p {
    font-size: var(--tx-md);
    font-weight: 550;
    letter-spacing: 0.5px;
  }
  & > svg {
    box-sizing: border-box;
    padding: 4px 3px 0 3px;
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    fill: white;
  }
`;

const DropdownList = styled("ul")`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: absolute;
  top: 35px;
  padding-top: 10px;
  right: 0;
  flex-flow: column nowrap;
  background-color: transparent;
  min-width: 200px;
`;
const DropdownOption = styled("li")`
  background-color: var(--grey-base);
  border-radius: var(--br-nl);
  &:hover {
    opacity: 0.7;
  }
`;

export { AccountWidget };
