// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FiltersContainer } from "./FiltersContainer.jsx";
import { FilterRoomType } from "./FilterRoomType.jsx";
import { TimeFilters } from "./FilterTime.jsx";
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { MUIScoreboardTable } from "../../../components/tables/mui-scoreboard-table/MUIScoreboardTable.jsx";
import { FilterRoom } from "./filter-room/FilterRoom.jsx";

function PageScoreboardTop10() {
  const [filters, setFilters] = React.useState([]);
  const [timeFilter, setTimeFilter] = React.useState("");

  function handleFilterSelect(filter) {
    for (let i = 0; i < filters.length; i++) {
      if (filters[i] === filter) {
        setFilters(filters.slice(0, i).concat(filters.slice(i + 1)));
        return;
      }
    }
    setFilters(filters.concat(filter));
  }
  React.useEffect(() => {
    debug(filters, "filters changed");
  }, [filters]);

  function handleTimeFilterSelect(filter) {
    setTimeFilter(timeFilter === filter ? "" : filter);
  }
  return (
    <StylePageScoreboardTop10>
      <FiltersContainer>
        <FilterRoomType filters={filters} onFilterSelect={handleFilterSelect} />
        <TimeFilters
          timeFilter={timeFilter}
          onFilterSelect={handleTimeFilterSelect}
          style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
        />
        <FilterRoom style={{ gridRow: "1 / 3", gridColumn: "2 / 3" }} />
      </FiltersContainer>
      <AwaitScoreboardTeams>
        {(scoreboard) => {
          return <MUIScoreboardTable teams={scoreboard.teams} />;
        }}
      </AwaitScoreboardTeams>
    </StylePageScoreboardTop10>
  );
}

const StylePageScoreboardTop10 = styled("div")`
  width: 100%;
  height: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageScoreboardTop10 };
