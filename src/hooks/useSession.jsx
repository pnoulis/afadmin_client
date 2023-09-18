import { session } from "/src/services/session.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { useAfmachineAction } from "/src/hooks/useAfmachineAction.jsx";

function useSession() {
  const __session = session.get();
  const { action: sLogin } = useAfmachineAction();
  const { action: sLogout } = useAfmachineAction();
  const { action: sCashout } = useAfmachineAction();

  function login(cashier) {
    return sLogin.run(() => session.login(cashier));
  }

  function logout(drop) {
    return sLogout.run(() => session.logout(drop));
  }

  function cashout(report) {
    return sCashout.run(() => session.cashout(report));
  }

  return {
    ...__session,
    sLogin,
    sLogout,
    sCashout,
    login,
    logout,
    cashout,
  };
}

export { useSession };
