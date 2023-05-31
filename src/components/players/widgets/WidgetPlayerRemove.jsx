import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { useContextPlayer } from "/src/stores/player/index.js";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";

function WidgetPlayerRemove({
  size,
  content,
  onRemovePlayer,
  className,
  children,
  ...props
}) {
  const player = useContextPlayer();
  return (
    <TooltipDefault
      trigger={
        children ? (
          React.cloneElement(children, {
            onClick: () => onRemovePlayer(player),
          })
        ) : (
          <StyleTrashIcon
            size={size}
            onClick={() => onRemovePlayer(player)}
            className={className}
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
  margin-left: auto;
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
`;

export { WidgetPlayerRemove };
