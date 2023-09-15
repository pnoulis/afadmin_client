import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as SmallArrowIcon } from "agent_factory.shared/ui/new-icons/filter-pointer.svg";

/*
  Sorting direction (order)

  Any list of data may either be sorted in ascending or descending order through
  a sorting function. The TableSortLabel represents the GUI interface by which a
  user may select a new order and a new sorting function.

  Ascending order: 0-9, A-Z...
  Descending order: 9-0, Z-A...

  By default this table is sorted in ascending order.

  The task of TableSortLabel is to provide the user an interface to
  change the sorting order and pick a new sorting function.

  When a user clicks at the TableSortLabel a registered handler is invoked. It's
  task is to provide the Table with a new *order function id* and a new *order
  direction*. If the TableSortTable is clicked for the fist time, it becomes
  active, sorting in ascending order. Any subsequent click on the same
  TableSortLabel will toggle the *sorting order* not the *order function id*.
  All other TableSortLabels are toggled inactive.

  The handler initiates the process of recalculating a new sorted list after
  which all child components are re-rendered. At this point the TableSortLabel
  calculates the direction of the image representing the sorting order (usually
  an arrow).

  Ascending order arrow: faces upwards
  Descending order arrow: faces downwards.
 */

function TableSortLabel({ children, orderBy, order }) {
  return (
    <>
      {children}
      <StyledArrow direction={"asc"}>
        <Svg size="30">
          <SmallArrowIcon />
        </Svg>
      </StyledArrow>
    </>
  );
}

const StyledArrow = styled.div`
  display: inline-block;
  transform: rotate(
    ${({ direction }) => (direction === "asc" ? "0" : "180")}deg
  );
`;

export { TableSortLabel };
