import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { useContextTeam } from "/src/stores/team/index.js";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";

function WidgetTeamPlayerRemove({
  player,
  size,
  content,
  onRemovePlayer,
  className,
  children,
  ...props
}) {
  const { onClickTeamPlayerRemove } = useContextTeam();
  return (
    <TooltipDefault
      trigger={
        children ? (
          React.cloneElement(children, {
            ...onClickTeamPlayerRemove(player),
          })
        ) : (
          <StyleTrashIcon
            size={size}
            className={className}
            {...onClickTeamPlayerRemove(player)}
            {...props}
          >
            <Svg>
              <TrashIcon />
            </Svg>
          </StyleTrashIcon>
        )
      }
      content={content || "remove player"}
    />
  );
}

const StyleTrashIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
`;

export { WidgetTeamPlayerRemove };
