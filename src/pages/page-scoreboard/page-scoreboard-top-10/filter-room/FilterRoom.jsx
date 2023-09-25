// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { WidgetArrow } from "/src/components/widgets/index.js";
import { ComboboxSelectRoom } from "./ComboboxSelectRoom.jsx";
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { TagsArea } from "./TagsArea.jsx";

function FilterRoom({
  filters,
  onFilterSelect: handleFilterSelect,
  className,
  style,
}) {
  const [showRoomsCombobox, setShowRoomsCombobox] = React.useState(false);
  return (
    <StyledFilterRoom className={className} style={style}>
      <AwaitScoreboardTeams>
        {(scoreboard) => (
          <>
            <StyledWidgetArrow
              $isActive={showRoomsCombobox}
              onClick={() => setShowRoomsCombobox((prev) => !prev)}
              tooltipContent="select room"
            />
            <TagsArea filters={filters} onFilterSelect={handleFilterSelect} />
            {showRoomsCombobox && (
              <ComboboxSelectRoom
                filters={filters}
                rooms={Object.keys(
                  scoreboard?.scores?.roomElementAssociations || {},
                )}
                onSelect={handleFilterSelect}
              />
            )}
          </>
        )}
      </AwaitScoreboardTeams>
    </StyledFilterRoom>
  );
}

const StyledWidgetArrow = styled(WidgetArrow)`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 30px;
  height: 30px;
  padding: 4px;
  z-index: 1000;
  & svg {
    transition: transform 0.2s ease-in;
    transform: ${({ $isActive }) =>
      $isActive ? "rotate(90deg)" : "rotate(-90deg)"};
  }
`;
// roomFilters?.length >= 1 && !showRoomsCombobox ? (
//         <p> show room tags</p>
//   ) : (
//     <p>show room combobox</p>
//   )}

const StyledFilterRoom = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
`;

export { FilterRoom };
