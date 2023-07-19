import { useRouteError, useNavigate } from "react-router-dom";

function CatchReactRouterErr() {
  const navigate = useNavigate();
  const err = useRouteError();
  const from = location.pathname;

  if (err.status === 404) {
    // Not Found
    navigate("/404", { replace: true, state: { from, err } });
  } else if (err.status === 401) {
    // Unauthorized
    navigate("/401", { replace: true, state: { from, err } });
  } else if (err.status === 408) {
    // Request Timeout
    navigate("/408", { replace: true, state: { from, err } });
  } else {
    // Anything else
    navigate("/500", { replace: true, state: { from, err } });
  }
}

export { CatchReactRouterErr };
