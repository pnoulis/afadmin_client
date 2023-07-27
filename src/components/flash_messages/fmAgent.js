import { FlashMessages } from "react_utils/flashMessages";
import { ErrorFm } from "./ErrorFm.jsx";
import { InfoFm } from "./InfoFm.jsx";
import { SuccessFm } from "./SuccessFm.jsx";
import { WarnFm } from "./WarnFm.jsx";
import { FmRoot } from "./FmRoot.jsx";

const fmAgent = new FlashMessages({
  id: "afadmin_client-fms",
  Info: InfoFm,
  Warn: WarnFm,
  Error: ErrorFm,
  Success: SuccessFm,
  FmRoot,
});

export { fmAgent };
