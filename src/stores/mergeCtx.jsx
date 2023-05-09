import * as React from "react";
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
  const [modelMerge, setModelMerge] = React.useState({
    players: [],
    teams: [],
  });
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
