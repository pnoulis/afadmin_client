import * as React from "react";
import styled from "styled-components";
import { useLoaderData, Await } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { TableTeams } from "./TableTeams.jsx";

function RouteLiveViewTeams() {
  const loadTeams = useLoaderData();

  return (
    <StyleRouteLiveViewTeams>
      <React.Suspense fallback={<StyleMoonLoader />}>
        <Await resolve={loadTeams.teams}>
          {(teams = []) => (
            <div className="table-container">
              <TableTeams rows={teams} />
            </div>
          )}
        </Await>
      </React.Suspense>
    </StyleRouteLiveViewTeams>
  );
}

const StyleRouteLiveViewTeams = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .table-container {
    padding: 30px 40px;
    height: 100%;
    width: 100%;
  }
`;

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={70} />;
}

export { RouteLiveViewTeams };
