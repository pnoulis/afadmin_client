import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadCashiers() {
  return defer({ cashiers: afmachine.listCashiers() });
}

export { loadCashiers };
