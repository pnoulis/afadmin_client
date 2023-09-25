// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as PersonIcon } from "agent_factory.shared/ui/icons/person-filled.svg";
import { useHover, useUser } from "/src/hooks/index.js";
import { Logout } from "/src/components/widgets/WidgetAccountButtons.jsx";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { displaypoperr } from "/src/utils/index.js";
import { useSession } from "/src/hooks/index.js";

/**
 * WidgetAccount
 * @example
 *
 */
function WidgetAccount() {
  const [hovering, onHover] = useHover();
  const { sLogout, logout } = useSession();
  const { username } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
  }

  return (
    <Dropdown>
      <PopoverAsyncState
        timePending={500}
        action={sLogout}
        onSettled={(loggedOut, response) => {
          if (loggedOut) {
            navigate("/login", { replace: true });
          } else {
            displaypoperr(response);
          }
        }}
      />
      <DropdownTrigger {...onHover}>
        <p>{username}</p>
        <Svg size="25">
          <PersonIcon />
        </Svg>
        <DropdownList open={hovering}>
          <DropdownOption>
            <Logout onLogout={handleLogout} />
          </DropdownOption>
        </DropdownList>
      </DropdownTrigger>
    </Dropdown>
  );
}

const Dropdown = styled("ul")`
  display: flex;
  flex-flow: column nowrap;
  z-index: 100;
`;

const DropdownTrigger = styled("li")`
  z-index: 100;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  padding: 5px;
  & > p {
    font-size: var(--tx-md);
    font-weight: 500;
    padding: 0 5px;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  & > svg {
    box-sizing: border-box;
    padding: 4px 3px 0 3px;
    background-color: black;
    border-radius: 50%;
    fill: white;
  }
`;

const DropdownList = styled("ul")`
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 100;
  position: absolute;
  top: 35px;
  padding-top: 10px;
  right: 0;
  flex-flow: column nowrap;
  background-color: transparent;
  min-width: 200px;
`;
const DropdownOption = styled("li")`
  z-index: 100;
  background-color: var(--grey-light);
  border-radius: var(--br-nl);
  &:hover {
    background-color: var(--grey-subtle);
  }
`;

export { WidgetAccount };
