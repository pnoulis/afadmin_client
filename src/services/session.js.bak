// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
import { evlogin, evlogout } from "/src/services/afmachine/statefulActions.js";
// ------------------------------ project  ------------------------------- //
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
  } else {
    this.global.set("loggedIn", false);
  }

  this.sessionlogin = function (login) {
    this.user = new LocalStorageService(login.sessionId);
    const __session = { user: login };
    const prevSession = this.global.get(login.username);
    if (prevSession) {
      this.global.remove(login.username);
      for (const [k, v] of Object.entries(prevSession)) {
        __session[k] = v;
      }
    }
    this.root.set(login.sessionId, __session);
    this.loggedIn = true;
    this.root.set("sessionId", login.sessionId);
    this.global.set("loggedIn", true);
    this.sessionId = login.sessionId;
  };

  this.sessionlogout = function (drop = false) {
    const prevSession = this.user.get();
    this.user.persistent.drop();
    this.user.temporary.drop();
    if (prevSession?.user?.username) {
      if (drop) {
        this.global.remove(prevSession.user.username);
      } else {
        this.global.set(prevSession.user.username, prevSession);
      }
    }
    this.user = null;
    this.loggedIn = false;
    this.global.set("loggedIn", false);
    this.root.remove("sessionId");
  };

  this.login = function (cashier) {
    return this.loggedIn
      ? evlogout(this.user.get("user"))
          .then(() => this.sessionlogout(false))
          .then(() => evlogin(cashier))
          .then((res) => this.sessionlogin(res))
      : evlogin(cashier).then((res) => this.sessionlogin(res));
  };
  this.login.states = evlogin;

  this.logout = function (drop) {
    return evlogout(this.user.get("user")).then(() => this.sessionlogout(drop));
  };
  this.logout.states = evlogout;

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
