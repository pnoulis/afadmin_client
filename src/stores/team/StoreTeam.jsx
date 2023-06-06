import * as React from "react";
import { useContextApp } from "/src/app/index.js";
import { ContextProvideTeam } from "./ContextTeam.jsx";
import { TEAM_SCHEMA } from "agent_factory.shared/schemas.js";
import { useRemoteData } from "react_utils";

function StoreProvideTeam({ children }) {
  const team = useStoreTeam();
  return (
    <ContextProvideTeam useSchema team={team}>
      {children}
    </ContextProvideTeam>
  );
}

function useStoreTeam(config) {
  const app = useContextApp();
  const mergeTeamStates = useRemoteData({
    getRemoteData: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve("yolo"), 3000);
      }),
  });
  const [store, setStore] = React.useState({
    ...window.structuredClone(TEAM_SCHEMA),
    ...config,
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  /*
    ACTIONS
   */
  const submitTeamName = () => {};
  const addPlayer = () => {};
  const removePlayer = () => {};
  const toggleWristbandPairing = () => {};

  /*
    EVENT HANDLERS
   */
  const handleTeamNameChange = (teamName, cb) => {};
  const handleTeamMerge = (cb) => {
    alert("merging team");
    console.log(mergeTeamStates);
    mergeTeamStates.startFetching();
  };
  const handleTeamPlayerAdd = (player) => {
    alert("add player");
    console.log(player);
  };
  const handleTeamPlayerRemove = (player) => {
    alert("remove player");
    console.log(player);
  };
  const handlePlayerWristbandPairToggle = (player) => {};

  /*
    EVENTS
   */
  const onClickTeamPlayerAdd = (player) => ({
    onClick: (e) => handleTeamPlayerAdd(player),
  });
  const onClickTeamPlayerRemove = (player) => ({
    onClick: (e) => handleTeamPlayerRemove(player),
  });
  const onClickPlayerWristbandPairToggle = (player) => ({
    onClick: (e) => handlePlayerWristbandPairToggle(player),
  });
  const onChangeTeamName = (teamName) => ({
    onChange: (e) => handleTeamNameChange(teamName),
  });
  const onSubmitTeamMerge = (cb) => ({
    onSubmit: (e) => handleTeamMerge(cb),
    onClick: (e) => handleTeamMerge(cb),
  });

  return {
    ...store,
    setStoreTeam: setStore,
    storeTeamRef: storeRef,
    mergeTeamStates,
    handleTeamNameChange,
    handleTeamMerge,
    handleTeamPlayerAdd,
    handleTeamPlayerRemove,
    handlePlayerWristbandPairToggle,
    onClickTeamPlayerAdd,
    onClickTeamPlayerRemove,
    onClickPlayerWristbandPairToggle,
    onChangeTeamName,
    onSubmitTeamMerge,
  };
}

export { useStoreTeam, StoreProvideTeam };
