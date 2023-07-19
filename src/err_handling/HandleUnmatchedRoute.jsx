import * as React from "react";
import { useNavigate } from "react-router-dom";

function HandleUnmatchedRoute() {
  const navigate = useNavigate();
  const path = location.pathname;
  React.useEffect(() => {
    navigate("/404", { replace: true, state: { path } });
  }, []);
  return <></>;
}

export { HandleUnmatchedRoute };
