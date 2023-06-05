import * as React from "react";
import styled from "styled-components";
import { useContextTeam } from "/src/stores/team/index.js";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as AddIcon } from "agent_factory.shared/ui/icons/add_0.svg";
import { Svg } from "react_utils/svgs";

function WidgetTeamPlayerAdd({
  size,
  content = "",
  className,
  children,
  ...props
}) {
  const { onClickTeamPlayerAdd } = useContextTeam();
  return (
    <TooltipDefault
      trigger={
        children ? (
          React.cloneElement(children, {
            ...onClickTeamPlayerAdd(),
          })
        ) : (
          <StyleAddIcon
            size={size}
            className={className}
            {...onClickTeamPlayerAdd()}
            {...props}
          >
            <AddIcon />
          </StyleAddIcon>
        )
      }
      content={content || "add player"}
    />
  );
}

const StyleAddIcon = styled(Svg)`
  display: flex;
  cursor: pointer;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  padding: 8px;
  border-radius: 50%;
  background-color: white;
  &:hover {
    background-color: var(--primary-light);
    fill: white;
  }
`;

export { WidgetTeamPlayerAdd };
