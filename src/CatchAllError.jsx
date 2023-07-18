import { useRouteError } from "react-router-dom";

function CatchAllError() {
  console.log('catch all error');
  const err = useRouteError();
  console.log(err);
  return <div>dang!</div>;
}

export { CatchAllError };
