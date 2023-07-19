import { displayFlashMessageMiddleware } from "./displayFlashMessageMiddleware";
import { Afmachine } from "afmachine/src/index.js";

Afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);

function persistSession(k, v) {
  Afmachine.services.storage.session.set(function (store) {
    store = {
      ...store,
      [k]: v,
    };
    return store;
  });
}
function getSession(k) {
  return Afmachine.services.storage.session.get(k) || {};
}
function persistClient(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store = {
      ...store,
      client: {
        ...store.client,
        [k]: v,
      },
    };
    return store;
  });
}
function getClient(k) {
  return k
    ? Afmachine.services.storage.client.get("client")?.[k] || {}
    : Afmachine.services.storage.client.get() || {};
}

export { Afmachine, persistSession, getSession, persistClient, getClient };
