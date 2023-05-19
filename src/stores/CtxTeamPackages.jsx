import * as React from "react";
import { PACKAGE_SCHEMA } from "agent_factory.shared/schemas.js";
import styled from "styled-components";
import { mapPackage } from "agent_factory.shared/utils/index.js";
import { useAppCtx } from "/src/app/index.js";
import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";

const StyleAlertDialog = styled(AlertDialog)`
  width: 600px;
`;

function AlertPackageAlreadyUploaded({ handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>upload team package</AlertDialogHeading>
      <AlertDialogDescription>
        This package has already been uploaded. Aborting...
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

function AlertPackageActiveNoRemove({ handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>remove team package</AlertDialogHeading>
      <AlertDialogDescription>
        This package is currently being played. Aborting...
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

const StyleConfirmationDialog = styled(ConfirmationDialog)`
  width: 400px;
`;

const StyleConfirmationDialogDescription = styled(
  ConfirmationDialogDescription
)`
  box-sizing: border-box;
  color: var(--primary-medium);
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  margin-top: 20px;
  text-align: center;
`;

function ConfirmRemoveTeamPackage({ handleClose }) {
  return (
    <StyleConfirmationDialog
      initialOpen
      onClose={handleClose}
      style={{ wdith: "400px" }}
    >
      <ConfirmationDialogHeading>remove team package</ConfirmationDialogHeading>
      <StyleConfirmationDialogDescription>
        Really remove the package from the team?
      </StyleConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>remove</ConfirmationDialogConfirm>
    </StyleConfirmationDialog>
  );
}

const CtxTeamPackages = React.createContext(null);
const useCtxTeamPackages = () => {
  const ctx = React.useContext(CtxTeamPackages);
  if (ctx == null) {
    throw new Error("<ProvideCtxTeamPackages/> missing");
  }
  return ctx;
};
const ProvideCtxTeamPackages = ({ value, children }) => (
  <CtxTeamPackages.Provider value={value}>{children}</CtxTeamPackages.Provider>
);

const useModelTeamPackages = (ctxTeam) => {
  const { addTeamPackage, removeTeamPackage } = useAppCtx();
  const generatePkg = (nPkgs) => {
    return {
      ...mapPackage(PACKAGE_SCHEMA, "frontend"),
      id: `new:${nPkgs + 1}`,
      status: "new",
    };
  };

  const [modelTeamPkgs, setModelTeamPkgs] = React.useState(() => {
    const packages =
      ctxTeam.team?.packages?.length > 0
        ? ctxTeam.team?.packages
        : [generatePkg(0)];
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
      packages: modelTeamPkgs.packages.map((_) =>
        _.id === modelTeamPkgs.selectedPkgId
          ? {
              ..._,
              ...pkg,
            }
          : _
      ),
    });
  };

  const uploadPkg = () => {
    const { name, status } = modelTeamPkgs.packages.find(
      (_) => _.id === modelTeamPkgs.selectedPkgId
    );

    if (status !== "new") {
      renderDialog(null, AlertPackageAlreadyUploaded);
      return;
    }

    addTeamPackage({
      teamName: ctxTeam.team.name,
      name,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const removePkg = () => {
    const { name, status } = modelTeamPkgs.packages.find(
      (_) => _.id === modelTeamPkgs.selectedPkgId
    );

    if (status === "new") {
      return;
    }

    if (status === "active") {
      renderDialog(null, AlertPackageActiveNoRemove);
      return;
    }

    renderDialog(null, ConfirmRemoveTeamPackage, (remove) => {
      if (!remove) return;
      removeTeamPackage({
        teamName: ctxTeam.team.name,
        packageId: modelTeamPkgs.selectedPkgId,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };
  return {
    ...ctxTeam.team,
    ...modelTeamPkgs,
    setModelTeamPkgs,
    modelTeamPkgsRef,
    addNewPkg,
    selectPkg,
    configurePkg,
    uploadPkg,
    removePkg,
  };
};

function ProvideStoreTeamPackages({ ctxTeam, children }) {
  const model = useModelTeamPackages(ctxTeam);
  return (
    <ProvideCtxTeamPackages value={model}>{children}</ProvideCtxTeamPackages>
  );
}

export { useCtxTeamPackages, ProvideStoreTeamPackages };
