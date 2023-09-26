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

const getRooms = (function () {
  let promised = false;
  return (roomsPromise, cb) => {
    if (roomsPromise === "reset") {
      promised = false;
      return;
    }
    if (promised) return;
    promised = true;
    roomsPromise.then(cb);
  };
})();

const RoomTypeEnum = {
  AIR: 0,
  FIRE: 1,
  EARTH: 2,
  WATER: 3,
};

function PageScoreboardTop10() {
  const [rooms, setRooms] = React.useState({});
  const [filter, setFilter] = React.useState({
    type: "teamAllTime",
    value: "all",
  });
  const loadTeams = useRouteLoaderData("scoreboard-root");

  function handleFilterSelect(newFilter) {
    debug(newFilter, "new filter");
    setFilter(newFilter);
  }
  // function handleRoomTypeSelect(roomType) {
  //   for (let i = 0; i < typeFilters.length; i++) {
  //     if (typeFilters[i] === roomType) {
  //       setTypeFilters(
  //         typeFilters.slice(0, i).concat(typeFilters.slice(i + 1)),
  //       );
  //       return;
  //     }
  //   }
  //   setTypeFilters(typeFilters.concat(roomType));
  // }
  // React.useEffect(() => {
  //   if (typeFilters.length < 1) {
  //     setFilters(rooms.flat?.());
  //     return;
  //   }
  //   const newFilters = [];
  //   for (let i = 0; i < typeFilters.length; i++) {
  //     newFilters.push(...rooms[RoomTypeEnum[typeFilters[i].toUpperCase()]]);
  //   }
  //   setFilters(newFilters);
  // }, [typeFilters]);

  // React.useEffect(() => {
  //   debug(filters, "filters changed");
  // }, [filters]);

  // React.useEffect(() => {
  //   debug(rooms, "rooms changed");
  // }, [rooms]);

  React.useEffect(() => {
    debug(loadTeams, "loadtimse");
    getRooms(loadTeams.scoreboard, (res) => {
      const rooms = [[], [], [], []];
      for (const [k, v] of Object.entries(
        res.scores?.roomElementAssociations,
      )) {
        rooms[RoomTypeEnum[v]].push(k);
      }
      setRooms(rooms);
    });
    return () => getRooms("reset");
  }, []);

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
          debug(scoreboard.scores, "debug scoreboard");
          let filteredData;
          if (filter?.type === "perElement" || filter?.type === "perRoom") {
            filteredData = scoreboard.scores[filter.type][filter.value];
          } else {
            filteredData = scoreboard.scores[filter?.type];
          }
          debug(filteredData, "debug filtered data");
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
