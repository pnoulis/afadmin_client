import { afmachine, AsyncAction, Scheduler } from "afmachine/src/index.js";
import { displayFlashMessageMiddleware } from "./displayFlashMessageMiddleware";
import { session } from "./session.js";

afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);
afmachine.services.storage = session;

export { afmachine, AsyncAction, Scheduler };
