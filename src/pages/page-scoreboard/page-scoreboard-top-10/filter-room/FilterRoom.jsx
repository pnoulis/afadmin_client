// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ComboboxSelectRoom } from "./ComboboxSelectRoom.jsx";
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { TagsArea } from "./TagsArea.jsx";

function FilterRoom({ roomFilters, onRoomFiltersSelect, className, style }) {
  const [showRoomsCombobox, setShowRoomsCombobox] = React.useState(false);
  return (
    <StyledFilterRoom className={className} style={style}>
      <AwaitScoreboardTeams>
        {(scoreboard) => (
          <>
            <TagsArea />
            <ComboboxSelectRoom
              rooms={Object.keys(
                scoreboard?.scores?.roomElementAssociations || {},
              )}
            />
          </>
        )}
      </AwaitScoreboardTeams>
    </StyledFilterRoom>
  );
}

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
