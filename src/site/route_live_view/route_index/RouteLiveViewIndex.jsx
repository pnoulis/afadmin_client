import * as React from 'react';
import styled from 'styled-components';
import { useLoaderData } from "react-router-dom";
import { TableTeams } from './TableTeams.jsx';

const StyleRouteLiveViewIndex = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: start;
`;

function RouteLiveViewIndex() {
  const teams = useLoaderData();
  return (
    <StyleRouteLiveViewIndex>
      <TableTeams rows={teams}/>
    </StyleRouteLiveViewIndex>
  );
}

export { RouteLiveViewIndex };
