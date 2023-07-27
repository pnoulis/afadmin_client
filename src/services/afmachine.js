import {
  afmachine,
  AsyncAction,
  logPlayer,
  logStateChange,
  logWristband,
} from "afmachine/src/index.js";
import { displayFlashMessageMiddleware } from "./displayFlashMessageMiddleware";

afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);

// function persistSession(k, v) {
//   Afmachine.services.storage.session.set(function (store) {
//     store = {
//       ...store,
//       [k]: v,
//     };
//     return store;
//   });
// }
// function getSession(k) {
//   return Afmachine.services.storage.session.get(k) || {};
// }
// function persistClient(k, v) {
//   Afmachine.services.storage.client.set(function (store) {
//     store = {
//       ...store,
//       client: {
//         ...store.client,
//         [k]: v,
//       },
//     };
//     return store;
//   });
// }
// function getClient(k) {
//   return k
//     ? Afmachine.services.storage.client.get("client")?.[k] || {}
//     : Afmachine.services.storage.client.get() || {};
// }
// function persistPage(page, k, v) {
//   Afmachine.services.storage.client.set(function (store) {
//     store[page] = {
//       ...store[page],
//       [k]: v,
//     };
//     return store;
//   });
// }
// function getPage(page) {
//   return Afmachine.services.storage.client.get(page) || {};
// }

export { afmachine, AsyncAction, logPlayer, logStateChange, logWristband };
