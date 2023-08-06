import { LocalStorageService } from "agent_factory.shared/services/client_storage/local_storage/index.js";
import { CLIENT_STORAGE_GLOBAL_SESSION_ID } from "agent_factory.shared/constants.js";

function Session() {
  this.root = new LocalStorageService();
  this.global = new LocalStorageService(CLIENT_STORAGE_GLOBAL_SESSION_ID);
  this.sessionId = this.root.get("sessionId") ?? null;
  this.user = null;
  this.loggedIn = false;

  if (this.sessionId) {
    this.user = new LocalStorageService(this.sessionId);
    this.loggedIn = true;
    this.global.set("loggedIn", true);
  }

  this.login = function (login) {
    if (this.loggedIn) {
      this.logout();
    }
    this.user = new LocalStorageService(login);
    this.user.set("user", login);
    this.loggedIn = true;
    this.global.set("loggedIn", true);
  };

  this.logout = function () {
    const prevSession = this.user.get();
    this.user.persistent.drop();
    this.user.temporary.drop();
    this.user = null;
    if (this.loggedIn) {
      this.global.set(prevSession.user.username, prevSession);
    }
    this.loggedIn = false;
    this.global.set("loggedIn", false);
    this.root.remove("sessionId");
  };

  this.get = function (key) {
    return this.loggedIn ? this.user.get(key) : null;
  };
  this.set = function (key, value) {
    if (!this.loggedIn) throw new Error("No session");
    return this.user.set(key, value);
  };
  this.remove = function (key) {
    if (!this.loggedIn) throw new Error("No session");
  };
}

const session = new Session();

export { session };
