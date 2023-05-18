import * as React from "react";
import {
  PACKAGE_SCHEMA
} from "agent_factory.shared/schemas.js";
import {
  mapPackage
} from "agent_factory.shared/utils/index.js";

const CtxTeamPackages = React.createContext(null);
const useCtxTeamPackages = () => {
  const ctx = React.useContext(CtxTeamPackages);
  if (ctx == null) {
    throw new Error("<ProvideCtxTeamPackages/> missing");
  }
  return ctx;
};
const ProvideCtxTeamPackages = ({
  value,
  children
}) => (
  <CtxTeamPackages.Provider value={value}>{children}</CtxTeamPackages.Provider>
);

const useModelTeamPackages = (ctxTeam) => {
  const generatePkg = (nPkgs) => {
    return {
      ...mapPackage(PACKAGE_SCHEMA, "frontend"),
      id: nPkgs + 1,
      status: "new",
    };
  };

  const [modelTeamPkgs, setModelTeamPkgs] = React.useState(() => {
    const packages =
      ctxTeam.team?.packages?.length > 0 ?
      ctxTeam.team?.packages : [generatePkg(0)];
    const selectedPkgId = packages[0].id;
    return {
      selectedPkgId,
      packages,
    };
  });
  const modelTeamPkgsRef = React.useRef(null);
  modelTeamPkgsRef.current = modelTeamPkgs;

  const addNewPkg = () => {
    const newPkg = generatePkg(modelTeamPkgs.packages.length);
    setModelTeamPkgs({
      ...modelTeamPkgs,
      packages: [...modelTeamPkgs.packages, newPkg],
      selectedPkgId: newPkg.id,
    });
  };

  const selectPkg = (pkgId) => {
    const pkg = modelTeamPkgs.packages.find((pkg) => pkg.id === pkgId);

    if (!pkg) {
      throw new Error(`Selected pkg:${pkgId} missing`);
    }

    setModelTeamPkgs({
      ...modelTeamPkgs,
      selectedPkgId: pkg.id,
    });
  };

  const configurePkg = (pkg) => {
    setModelTeamPkgs({
      ...modelTeamPkgs,
      packages: modelTeamPkgs.packages.map((_) => _.id === modelTeamPkgs
        .selectedPkgId ? ({
          ..._,
          ...pkg,
        }) : _)
    });
  };

  console.log(modelTeamPkgs);
  return {
    ...ctxTeam.team,
    ...modelTeamPkgs,
    setModelTeamPkgs,
    modelTeamPkgsRef,
    addNewPkg,
    selectPkg,
    configurePkg,
  };
};

function ProvideStoreTeamPackages({
  ctxTeam,
  children
}) {
  const model = useModelTeamPackages(ctxTeam);
  return (
    <ProvideCtxTeamPackages value={model}>{children}</ProvideCtxTeamPackages>
  );
}

export {
  useCtxTeamPackages,
  ProvideStoreTeamPackages
};
