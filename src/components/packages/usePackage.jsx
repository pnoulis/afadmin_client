import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";
import { useNavigate } from "react-router-dom";

function AlertMerge({ message, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>team packages</AlertDialogHeading>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
}

function __createPkg(source, options) {
  return afmachine.createPkg(source, null, options);
}

function usePackage(
  source,
  { team = {}, fill = false, depth = 0, createPkg } = {},
) {
  createPkg ||= function (pkg, options) {
    return afmachine.createPkg(pkg, team, options);
  };
  const {
    entity: pkg,
    state,
    id,
    create,
  } = useAfmachineEntity(source, createPkg, {
    fill,
    depth,
  });

  const [AFPkg, setAFPkg] = React.useState();
  const [pickedPkg, setPickedPkg] = React.useState(null);
  const [newpkg, setnewpkg] = React.useState(
    team.packages.length > 0 ? false : true,
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    setPickedPkg(null);
  }, [newpkg]);

  const selectPkg = function (afpkg) {
    setAFPkg(afpkg);
  };

  const uploadPkg = function () {
    let _pkg;
    if (pickedPkg !== null) {
      _pkg = team.packages[pickedPkg];
    } else {
      _pkg = AFPkg;
    }
    if (!_pkg?.name) {
      return renderDialog(null, AlertMerge, {
        message: "No package has been selected",
      });
    }
    team
      .registerPackage(createPkg(_pkg))
      .catch((err) => {
        renderDialog(null, AlertMerge, { message: err.message });
      })
      .finally(() => {
        setPickedPkg(null);
        setAFPkg(null);
        setnewpkg(false);
      });
  };

  const addNewPkg = function () {
    if (newpkg) {
      renderDialog(null, AlertMerge, {
        message: "Already configuring a new package",
      });
    } else {
      setnewpkg(true);
    }
  };

  const removePkg = function () {
    let _pkg;
    if (pickedPkg !== null) {
      _pkg = team.packages[pickedPkg];
    } else {
      _pkg = AFPkg;
      if (_pkg?.name) {
        setAFPkg(null);
        setnewpkg(false);
        return;
      }
    }
    if (!_pkg?.name) {
      return renderDialog(null, AlertMerge, {
        message: "No package has been selected",
      });
    }
    team
      .removePackage(createPkg(_pkg))
      .catch((err) => {
        renderDialog(null, AlertMerge, { message: err.message });
      })
      .finally(() => {
        setPickedPkg(null);
        setAFPkg(null);
        if (!team.packages.length) {
          setnewpkg(true);
        }
      });
  };

  const startPkg = function () {
    team
      .activate()
      .then(() => {
        navigate("/liveView", { replace: true });
      })
      .catch((err) => renderDialog(null, AlertMerge, { message: err.message }));
  };

  const delpkg = function () {
    if (team.packages.length >= 1) {
      setAFPkg(null);
      setnewpkg(false);
    } else {
      renderDialog(null, AlertMerge, {
        message: "Team does not have any packages",
      });
    }
  };

  const pickpkg = function (id) {
    setPickedPkg(id);
  };

  return {
    pkg,
    AFPkg,
    newpkg,
    setnewpkg,
    selectPkg,
    uploadPkg,
    addNewPkg,
    removePkg,
    startPkg,
    delpkg,
    pickpkg,
    pickedPkg,
  };
}

export { usePackage };
