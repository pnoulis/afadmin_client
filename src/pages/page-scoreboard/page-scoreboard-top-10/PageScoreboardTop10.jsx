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
import { FilterRoom } from "./filter-room/FilterRoom.jsx";

const getRooms = (function () {
  let promised = false;
  return (roomsPromise, cb) => {
    if (roomsPromise === 'reset') {
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
  const [filters, setFilters] = React.useState([]);
  const [typeFilters, setTypeFilters] = React.useState([]);
  const [timeFilter, setTimeFilter] = React.useState("");
  const loadTeams = useRouteLoaderData("scoreboard-root");

  function handleFilterSelect(filter) {
    for (let i = 0; i < filters.length; i++) {
      if (filters[i] === filter) {
        setFilters(filters.slice(0, i).concat(filters.slice(i + 1)));
        return;
      }
    }
    setFilters(filters.concat(filter));
  }
  function handleRoomTypeSelect(roomType) {
    for (let i = 0; i < typeFilters.length; i++) {
      if (typeFilters[i] === roomType) {
        setTypeFilters(
          typeFilters.slice(0, i).concat(typeFilters.slice(i + 1)),
        );
        return;
      }
    }
    setTypeFilters(typeFilters.concat(roomType));
  }
  React.useEffect(() => {
    if (typeFilters.length < 1) {
      setFilters(rooms.flat?.());
      return;
    }
    const newFilters = [];
    for (let i = 0; i < typeFilters.length; i++) {
      newFilters.push(...rooms[RoomTypeEnum[typeFilters[i].toUpperCase()]]);
    }
    setFilters(newFilters);
  }, [typeFilters]);

  React.useEffect(() => {
    debug(filters, "filters changed");
  }, [filters]);

  React.useEffect(() => {
    debug(rooms, "rooms changed");
  }, [rooms]);

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
      setFilters(rooms.flat());
    });
    return () => getRooms("reset");
  }, []);

  function handleTimeFilterSelect(filter) {
    setTimeFilter(timeFilter === filter ? "" : filter);
  }
  return (
    <StylePageScoreboardTop10>
      <FiltersContainer>
        <FilterRoomType
          filters={typeFilters}
          onFilterSelect={handleRoomTypeSelect}
        />
        <TimeFilters
          timeFilter={timeFilter}
          onFilterSelect={handleTimeFilterSelect}
          style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
        />
        <FilterRoom
          filters={filters}
          onFilterSelect={handleFilterSelect}
          style={{ gridRow: "1 / 3", gridColumn: "2 / 3" }}
        />
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
