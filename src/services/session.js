// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
import { evlogout } from "/src/services/afmachine/statefulActions.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
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
    this.user = new LocalStorageService(login.jwt);
    const __session = {
      user: {
        ...login,
        permissions: login.roles.at(-1),
      },
    };
    const prevSession = this.global.get(login.username);
    if (prevSession) {
      this.global.remove(login.username);
      for (const [k, v] of Object.entries(prevSession)) {
        __session[k] = v;
      }
    }
    this.root.set(login.jwt, __session);
    this.loggedIn = true;
    this.global.set("loggedIn", true);
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
  };

  this.login = function (cashier) {
    return afmachine
      .loginAdmin(cashier)
      .then((res) => {
        this.sessionlogin(res);
        if (!this.sessionId) {
          return afmachine.startSession(res).then((session) => {
            this.root.set("sessionId", session.jwt);
            this.sessionId = session.jwt;
            return session;
          }).catch(err => {
            // ignore
            console.log(err);
          })
        } else {
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    // return afmachine
    //   .loginAdmin(cashier)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // return this.loggedIn
    //   ? evlogout(this.user.get("user"))
    //       .then(() => this.sessionlogout(false))
    //       .then(() => evlogin(cashier))
    //       .then((res) => this.sessionlogin(res))
    //   : evlogin(cashier).then((res) => this.sessionlogin(res));
  };

  this.cashout = function (report) {
    return afmachine
      .stopSession({
        ...this.user.get(),
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
