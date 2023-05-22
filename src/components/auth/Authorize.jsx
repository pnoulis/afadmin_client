import { useUser } from "/src/hooks/index.js";

function Authorize({ level = "cashier", renderProps, children }) {
  const user = useUser();
  const isAuthorized = user;

  return renderProps ? renderProps(isAuthorized) : children;
}

export { Authorize };
