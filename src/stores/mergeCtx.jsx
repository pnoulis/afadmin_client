import * as React from "react";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";

const CtxMerge = React.createContext(null);
const useCtxMerge = () => {
  const ctx = React.useContext(CtxMerge);
  if (ctx == null) {
    throw new Error("<ProvideCtxMerge/> missing");
  }
  return ctx;
};
const ProvideCtxMerge = ({ value, children }) => (
  <CtxMerge.Provider value={value}>{children}</CtxMerge.Provider>
);
const useModelMerge = () => {
  const [modelMerge, setModelMerge] = React.useState(() => ({
    players: [],
    stagingArea: new Array(MAX_TEAM_SIZE).fill(PLAYER_SCHEMA),
    teams: [],
  }));
  const modelMergeRef = React.useRef(null);
  modelMergeRef.current = modelMerge;
  return {
    ...modelMerge,
    setModelMerge,
    modelMergeRef,
  };
};
function ProvideStoreMerge({ children }) {
  const model = useModelMerge();
  return <ProvideCtxMerge value={model}>{children}</ProvideCtxMerge>;
}
export { useCtxMerge, ProvideStoreMerge };
