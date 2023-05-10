import * as React from "react";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { SelectPlayerCombobox } from "./SelectPlayerCombobox.jsx";

function SelectPlayer({ className, ...props }) {
  const players = useLoaderData();
  return (
    <section className={className} {...props}>
      <SelectPlayerCombobox players={players} />
    </section>
  );
}

export { SelectPlayer };
