import { session } from "/src/services/session.js";
import { afmachine, Scheduler } from "/src/services/afmachine.js";
import { useNavigate } from "react-router-dom";

function useSession() {
  const navigate = useNavigate();
  const __session = session.get();

  const login = (function (cashier) {
    const scheduler = new Scheduler();
    const __login = function (cashier) {
      return scheduler
        .run(() => afmachine.loginCashier(cashier))
        .then((user) => {
          return session.login(user);
        });
    };
    Object.setPrototypeOf(__login, scheduler);
    return __login;
  })();

  const logout = (function () {
    const scheduler = new Scheduler();
    const __logout = function (drop) {
      return scheduler
        .run(() => afmachine.logoutCashier(__session.user))
        .then(() => session.logout(drop));
    };
    Object.setPrototypeOf(__logout, scheduler);
    return __logout;
  })();

  const cashout = (function () {
    const scheduler = new Scheduler();
    const __cashout = function (report) {
      return scheduler
        .run(() => afmachine.cashout(report))
        .then(() => {
          return logout(true);
        })
        .then(() => navigate("/login", { replace: true }));
    };
    Object.setPrototypeOf(__cashout, scheduler);
    return __cashout;
  })();

  return {
    ...__session,
    login,
    logout,
    cashout,
  };
}

export { useSession };
