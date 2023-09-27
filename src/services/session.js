// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
import { evlogout } from "/src/services/afmachine/statefulActions.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
// ------------------------------ project  ------------------------------- //
import { LocalStorageService } from "agent_factory.shared/services/client_storage/local_storage/index.js";
import { CLIENT_STORAGE_GLOBAL_SESSION_ID } from "agent_factory.shared/constants.js";

function Session() {
  // localStorage.
  this.root = new LocalStorageService();
  debug(CLIENT_STORAGE_GLOBAL_SESSION_ID, "client storage global session id");
  // localStorage.session
  this.global = new LocalStorageService(CLIENT_STORAGE_GLOBAL_SESSION_ID);
  this.sessionId = this.root.get("sessionId") ?? null;
  this.user = null;
  this.loggedIn = false;

  const session = this.global.get();
  debug(session, "global session");

  if (this.session?.loggedIn) {
    this.loggedIn = true;
  }

  this.sessionlogin = function (login) {
    let session = {};
    const prevSession = this.root.get(login.username);
    if (prevSession) {
      session = {
        ...prevSession,
        ...login,
        permissions: login.roles.at(-1),
      };
    } else {
      session = {
        ...login,
        permissions: login.roles.at(-1),
      };
    }
    this.root.remove(login.username);
    this.global.set("user", session);
    this.global.set("loggedIn", true);
    this.loggedIn = true;
  };

  this.sessionlogout = function (drop = false) {
    const prevSession = this.global.get("user");
    if (prevSession) {
      this.global.remove("user");
      if (!drop) {
        this.root.set(prevSession.username, prevSession);
      }
    }
    this.user = null;
    this.loggedIn = false;
    this.global.set("loggedIn", false);
  };

  this.login = function (cashier) {
    return afmachine
      .loginAdmin(cashier)
      .then((res) => {
        this.sessionlogin(res);
        const sessionId = this.root.get("sessionId");
        afmachine.startSession(res).then((session) => {
          this.root.set("sessionId", session.jwt);
          this.sessionId = session.jwt;
        }).catch(err => {
          console.log(err);
        }).finally(() => res);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  this.cashout = function (report) {
    return afmachine
      .stopSession({
        jwt: this.global.get("user")?.jwt,
        report,
      })
      .then((res) => {
        this.logout(true);
        this.root.remove("sessionId");
        this.sessionId = null;
      });
  };

  this.logout = function (drop) {
    return Promise.resolve(this.sessionlogout(drop));
  };
  this.logout.states = evlogout;

  this.get = function (key) {
    return this.loggedIn ? this.global.get(key) : null;
  };
  this.set = function (key, value) {
    if (!this.loggedIn) throw new Error("No session");
    return this.global.set(key, value);
  };
  this.remove = function (key) {
    if (!this.loggedIn) throw new Error("No session");
  };
}

const session = new Session();

export { session };
