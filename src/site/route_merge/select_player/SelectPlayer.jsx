import * as React from "react";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { SelectPlayerCombobox } from "./SelectPlayerCombobox.jsx";
import { useAppCtx } from "/src/app/index.js";
import { useCtxMerge } from "/src/stores/index.js";

function SelectPlayer({ className, ...props }) {
  const players = useLoaderData();
  const { addPlayerMergeTeamStagingArea } = useAppCtx();
  const { setModelMerge, modelMergeRef } = useCtxMerge();

  return (
    <section className={className} {...props}>
      <SelectPlayerCombobox
        players={players}
        handleSelect={(player) =>
          addPlayerMergeTeamStagingArea(
            modelMergeRef.current.stagingArea,
            player
          ).then((stagingArea) =>
            setModelMerge({
              ...modelMergeRef.current,
              stagingArea,
            })
          )
        }
      />
    </section>
  );
}

export { SelectPlayer };
