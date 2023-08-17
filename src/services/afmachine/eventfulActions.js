// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
import { afmachine, Scheduler } from "/src/services/afmachine/afmachine.js";
// ------------------------------ project  ------------------------------- //

const loginScheduler = new Scheduler();
const evlogin = function (cashier) {
  return loginScheduler.run(afmachine.loginCashier.bind(afmachine, cashier));
};
Object.setPrototypeOf(evlogin, loginScheduler);
const logoutScheduler = new Scheduler();
const evlogout = function (cashier) {
  return logoutScheduler.run(afmachine.logoutCashier.bind(afmachine, cashier));
};
Object.setPrototypeOf(evlogout, logoutScheduler);

export { evlogin, evlogout };
