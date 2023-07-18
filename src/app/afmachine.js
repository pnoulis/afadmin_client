import { displayFlashMessageMiddleware } from "./displayFlashMessageMiddleware";
import { Afmachine } from "afmachine";

Afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);

export { Afmachine };
