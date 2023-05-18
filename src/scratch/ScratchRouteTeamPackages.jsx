import * as React from "react";
import styled from "styled-components";
import { CardPackage } from "/src/site/route_team/route_packages/list_packages/CardPackage.jsx";

const pkg = {
  id: "yolo",
  type: "per mission 90",
  status: "something",
  cost: 0,
};

export default function ScratchRouteTeamPackages() {
  return (
    <div>
      <h1>Scratch route team packages</h1>
      <div>
        <CardPackage pkg={pkg} />
      </div>
    </div>
  );
}
