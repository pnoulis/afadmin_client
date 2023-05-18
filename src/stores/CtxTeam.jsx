import * as React from "react";

const CtxTeam = React.createContext(null);
const useCtxTeam = () => {
  const ctx = React.useContext(CtxTeam);
  if (ctx == null) {
    throw new Error("<ProvideCtxTeam/> missing");
  }
  return ctx;
};
const ProvideCtxTeam = ({ value, children }) => (
  <CtxTeam.Provider value={value}>{children}</CtxTeam.Provider>
);

const useModelTeam = (team) => {
  return { team };
};

function ProvideStoreTeam({ team, children }) {
  const model = useModelTeam(team);
  return <ProvideCtxTeam value={model}>{children}</ProvideCtxTeam>;
}

export { useCtxTeam, ProvideStoreTeam };
