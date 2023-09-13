// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePackage } from "./usePackage.jsx";
import { renderDialog, Alert } from "/src/components/dialogs/index.js";

function usePackageConfigurator(ctxTeam, source, options) {
  const { state, pkg, id, createPkg, changeSource } = usePackage(
    ctxTeam.team,
    source,
    options,
  );
  const [selectedPkg, setSelectedPkg] = React.useState(null);

  function handlePkgSelection(pkg) {
    debug(pkg, "handlePkgSelection");
    changeSource(pkg);
    setSelectedPkg(pkg);
  }

  function handleSelectedPkgClear() {
    changeSource(null);
    setSelectedPkg(null);
  }

  function handlePkgRegistration() {
    if (selectedPkg === null) {
      return renderDialog(null, Alert, {
        title: "register new package",
        msg: "No package has been selected!",
      });
    }
    debug(pkg, "handlePkgRegistration created pkg");
    ctxTeam.registerPackage(pkg).finally(handleSelectedPkgClear);
  }

  function handlePkgRemoval() {
    if (selectedPkg === null) {
      return renderDialog(null, Alert, {
        title: "remove package",
        msg: "No package has been selected!",
      });
    }
    ctxTeam.removePackage(pkg).finally(handleSelectedPkgClear);
  }

  function handlePkgActivation() {
    if (selectedPkg === null) {
      return renderDialog(null, Alert, {
        title: "activate package",
        msg: "No package has been selected!",
      });
    }
  }

  return {
    state,
    pkg,
    selectedPkg,
    handlePkgSelection,
    handleSelectedPkgClear,
    handlePkgRegistration,
    handlePkgRemoval,
    handlePkgActivation,
  };
}

export { usePackageConfigurator };
