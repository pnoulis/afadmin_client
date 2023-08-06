import { useUser } from "/src/hooks/index.js";

function Authorize({ level = "cashier", children }) {
  const user = useUser();
  return children(level === user.permissions);
}

export { Authorize };
