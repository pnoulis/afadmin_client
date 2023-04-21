import * as React from "react";
import sidebar from "agent_factory.shared/ui/backgrounds/sidebar.png";
import styled from "styled-components";

const StyleTestBuild = styled.div`
  font-family: NoirPro-SemiBold;
`;

export default function TestBuild() {
  return (
    <StyleTestBuild>
      <h1>Testing build</h1>
      <div style={{ width: "50px", height: "50px" }}>
        <img src={sidebar} />
      </div>
    </StyleTestBuild>
  );
}
