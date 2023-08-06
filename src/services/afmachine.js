import {
  afmachine,
  AsyncAction,
  Scheduler,
  logPlayer,
  logStateChange,
  logWristband,
  logTeam,
  logRoster,
} from "afmachine/src/index.js";
import { displayFlashMessageMiddleware } from "./displayFlashMessageMiddleware";
import { session } from "./session.js";

afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);
afmachine.services.storage = session;

export {
  afmachine,
  AsyncAction,
  Scheduler,
  logPlayer,
  logStateChange,
  logWristband,
  logTeam,
  logRoster,
};
