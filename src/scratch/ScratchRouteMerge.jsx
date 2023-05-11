import * as React from "react";
import { SelectPlayerCombobox } from "/src/site/route_merge/select_player/SelectPlayerCombobox.jsx";
import { App, useAppCtx } from "/src/app/index.js";
import { ProvideStoreMerge, useCtxMerge } from "/src/stores/index.js";

const mockPlayers = [
  {
    username: "test1_username",
    name: "test1_name",
    surname: "test1_surname",
    email: "test1_email@gmail.com",
    password: "test1_password",
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 10,
      wristbandColor: 0,
      active: true,
    },
  },

  {
    username: "test2_username",
    name: "test2_name",
    surname: "test2_surname",
    email: "test2_email@gmail.com",
    password: "test2_password",
    wristbandMerged: true,
    wristband: {
      wristbandNumber: 10,
      wristbandColor: 0,
      active: true,
    },
  },

  {
    username: "group1_username",
    name: "group1_name",
    surname: "group1_surname",
    email: "group1_email@gmail.com",
    password: "group1_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: null,
  },
  {
    username: "group2_username",
    name: "group2_name",
    surname: "group2_surname",
    email: "group2_email@gmail.com",
    password: "group2_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group3_username",
    name: "group3_name",
    surname: "group3_surname",
    email: "group3_email@gmail.com",
    password: "group3_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group4_username",
    name: "group4_name",
    surname: "group4_surname",
    email: "group4_email@gmail.com",
    password: "group4_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group5_username",
    name: "group5_name",
    surname: "group5_surname",
    email: "group5_email@gmail.com",
    password: "group5_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group6_username",
    name: "group6_name",
    surname: "group6_surname",
    email: "group6_email@gmail.com",
    password: "group6_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },
];

function SelectPlayer() {
  const { addPlayerMergeTeamStagingArea } = useAppCtx();
  const { setModelMerge, modelMergeRef } = useCtxMerge();

  React.useEffect(() => {
    console.log(modelMergeRef.current.stagingArea);
  }, [modelMergeRef.current.stagingArea]);
  return (
    <SelectPlayerCombobox
      players={mockPlayers}
      handleSelect={(player) =>
        addPlayerMergeTeamStagingArea(
          modelMergeRef.current.stagingArea,
          player
        ).then((newStagingArea) =>
          setModelMerge({
            ...modelMergeRef.current,
            stagingArea: newStagingArea,
          })
        )
      }
    />
  );
}

export default function ScratchRouteMerge() {
  return (
    <div>
      <h1>Scratch Route Merge</h1>
      <div>
        <App>
          <ProvideStoreMerge>
            <SelectPlayer />
          </ProvideStoreMerge>
        </App>
      </div>
    </div>
  );
}
