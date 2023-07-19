import * as React from "react";
import { useNavigate } from "react-router-dom";

function HandleUnmatchedRoute() {
  const navigate = useNavigate();
  const from = location.pathname;
  React.useEffect(() => {
    navigate("/404", { replace: true, state: { from } });
  }, []);
  return <></>;
}

export { HandleUnmatchedRoute };
