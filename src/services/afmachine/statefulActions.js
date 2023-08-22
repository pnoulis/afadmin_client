// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
import { afmachine, Scheduler } from "/src/services/afmachine/afmachine.js";
// ------------------------------ project  ------------------------------- //

// LOGIN
const loginScheduler = new Scheduler();
const evlogin = function (cashier) {
  return loginScheduler.run(afmachine.loginCashier.bind(afmachine, cashier));
};
Object.setPrototypeOf(evlogin, loginScheduler);

// LOGOUT
const logoutScheduler = new Scheduler();
const evlogout = function (cashier) {
  return logoutScheduler.run(afmachine.logoutCashier.bind(afmachine, cashier));
};
Object.setPrototypeOf(evlogout, logoutScheduler);

// TEST
const testScheduler = new Scheduler();
const sftest = function () {
  return testScheduler.run(afmachine.test.bind(afmachine));
};
Object.setPrototypeOf(sftest, testScheduler);

// REGISTER PLAYER
const registerPlayerScheduler = new Scheduler();
const sRegisterPlayer = function (player) {
  return registerPlayerScheduler.run(
    afmachine.registerPlayer.bind(afmachine, player),
  );
};
Object.setPrototypeOf(sRegisterPlayer, registerPlayerScheduler);

export { evlogin, evlogout, sftest, sRegisterPlayer };
