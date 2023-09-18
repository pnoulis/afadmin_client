import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { isFunction } from "js_utils/misc";
import { ReactComponent as ArrowDownwardIcon } from "agent_factory.shared/ui/new-icons/filter-pointer.svg";

/*
  Sorting direction (order)

  Any list of data may either be sorted in ascending or descending order through
  a sorting function.

  Ascending order: 0-9, A-Z..., (by default represented by an upwards facing arrow)
  Descending order: 9-0, Z-A... (by default represented by a downwards facing arrow)

  By default this table is sorted in ascending order.

  The TableSortLabel is the GUI interface by which a user may select a new order
  and a new sorting function.

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

function TableSortButton({
  active,
  orderBy,
  order,
  onSortButtonClick,
  className,
  style,
  children,
}) {
  return (
    <StyledSortButton
      type="button"
      style={style}
      className={`table-sort-button ${orderBy || ""} ${className || ""}`}
      onClick={onSortButtonClick?.bind(null, orderBy)}
    >
      {children}
      {active ? (
        <StyledSortButtonIcon
          className="table-sort-button-icon"
          order={active ? order : "asc"}
        >
          <Svg size="20">
            <ArrowDownwardIcon />
          </Svg>
        </StyledSortButtonIcon>
      ) : (
        <StyledSortButtonStub />
      )}
    </StyledSortButton>
  );
}

const StyledSortButton = styled("button")`
  cursor: pointer;
  text-align: center;
  width: 130px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  font-size: var(--tx-nl);
  color: var(--primary-base);
  font-weight: 700;
  text-transform: uppercase;
`;

const StyledSortButtonIcon = styled("span")`
  transform: rotate(${({ order }) => (order === "asc" ? "0" : "180")}deg);
`;

const StyledSortButtonStub = styled("span")`
  box-sizing: border-box;
  border-radius: 50%;
  padding: 5px;
  background-color: var(--primary-base);
`;

export { TableSortButton };
