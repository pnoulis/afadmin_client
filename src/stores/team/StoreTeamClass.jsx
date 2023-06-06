import * as React from "react";
import { ContextProvideTeam } from "./ContextTeam.jsx";

function StoreProvideTeamClass({ team, children }) {
  const store = useStoreTeamClass(team);
  return (
    <ContextProvideTeam useSchema={false} team={store}>
      {children}
    </ContextProvideTeam>
  );
}

function useStoreTeamClass(team) {
  const [team, setTeam] = React.useState(team);

  console.log(team);

  React.useEffect(() => {
    console.log("TEAM CHANGING");
  }, [team]);

  return {
    teamMerging,
  };
}

export { useStoreTeamClass, StoreProvideTeamClass };
