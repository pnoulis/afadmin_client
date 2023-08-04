import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function __createPkg(source, options) {
  return afmachine.createPkg(source, options);
}

function usePackage(
  source,
  { fill = false, depth = 0, createPkg = __createPkg } = {},
) {
  const [pkg, setPkg] = React.useState(source);
  // const {
  //   entity: team,
  //   state,
  //   id,
  //   create,
  // } = useAfmachineEntity(source, createPkg, {
  //   fill,
  //   depth,
  // });
  // const [afpkg, setAfpkg] = React.useState(pkg);
  // const [AFPkg, setAFPkg] = React.useState();

  const selectPkg = function (afpkg) {
    // setAFPkg(afpkg);
  };

  const uploadPkg = function () {
    console.log("add pkg");
    // onAddPackage(AFPkg);
  };

  const addNewPkg = function () {
    alert("add new pkg");
  };

  const removePkg = function () {
    alert("removepkg");
  };

  const startPkg = function () {
    alert("start pkg");
  };

  const stopPkg = function () {
    alert("stop pkg");
  };

  return {
    pkg,
    selectPkg,
    uploadPkg,
    addNewPkg,
    removePkg,
    startPkg,
    stopPkg,
  };
}

export { usePackage };
