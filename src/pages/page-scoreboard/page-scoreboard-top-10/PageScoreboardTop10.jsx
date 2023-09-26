// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useRouteLoaderData } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FiltersContainer } from "./FiltersContainer.jsx";
import { FilterRoomType } from "./FilterRoomType.jsx";
import { TimeFilters } from "./FilterTime.jsx";
import { AwaitScoreboardTeams } from "/src/pages/page-scoreboard/AwaitScoreboardTeams.jsx";
import { MUIScoreboardTable } from "../../../components/tables/mui-scoreboard-table/MUIScoreboardTable.jsx";
import { MUITop10Table } from "../../../components/tables/mui-top10-table/MUITop10Table.jsx";
import { FilterRoom } from "./filter-room/FilterRoom.jsx";
import { useRevalidator } from "react-router-dom";
import { useAfmachineSubscription } from "/src/hooks/index.js";

const every6Secs = (function () {
  let tries = 0;
  return (revalidator) => {
    if (++tries > 2) {
      tries = 0;
      debug("should revalidate data");
      revalidator.revalidate();
    } else {
      debug("should not revalidate data");
    }
  };
})();

function PageScoreboardTop10() {
  const revalidator = useRevalidator();
  const [filter, setFilter] = React.useState({
    type: "teamAllTime",
    value: "all",
  });
  const loadTeams = useRouteLoaderData("scoreboard-root");

  function handleFilterSelect(newFilter) {
    setFilter(newFilter);
  }
  return (
    <StylePageScoreboardTop10>
      <FiltersContainer>
        <FilterRoomType filter={filter} onFilterSelect={handleFilterSelect} />
        <TimeFilters
          filter={filter}
          onFilterSelect={handleFilterSelect}
          style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
        />
        <FilterRoom
          filter={filter}
          onFilterSelect={handleFilterSelect}
          style={{ gridRow: "1 / 3", gridColumn: "2 / 3" }}
        />
      </FiltersContainer>
      <AwaitScoreboardTeams>
        {(scoreboard) => {
          let filteredData;
          if (filter?.type === "perElement" || filter?.type === "perRoom") {
            filteredData = scoreboard.scores[filter.type][filter.value];
          } else {
            filteredData = scoreboard.scores[filter?.type];
          }
          return (
            <MUITop10Table
              key={filter?.type + filter?.value}
              teams={filteredData}
            />
          );
        }}
      </AwaitScoreboardTeams>
    </StylePageScoreboardTop10>
  );
}

const StylePageScoreboardTop10 = styled("div")`
  width: 100%;
  height: 100%;
  padding: 50px 50px 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageScoreboardTop10 };
