import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";

export default function scratchAfmachine() {
  React.useEffect(() => {
    afmachine
      .searchPlayer({ searchTerm: "theoun" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>scatch afmachine</h1>
      <div></div>
    </div>
  );
}
