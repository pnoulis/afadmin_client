// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { FormRegisterPlayer } from "/src/pages/page-registration/page-registration-player/FormRegisterPlayer.jsx";
import { useContextApp } from "/src/contexts/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";

function PageRegistrationPlayer() {
  const { afmachine, sRegisterPlayer } = useContextApp();

  function handlePlayerRegistration(form, setForm) {
    sRegisterPlayer(form)
      .then(() => {
        setForm("reset");
        document.activeElement.blur();
      })
      .catch((err) => {
        if (err.validationErrors) {
          setForm("setErrors", err.validationErrors);
        }
      })
      .finally(() => setForm("setSubmit", false));
  }

  return (
    <div className="mid">
      <PopoverAsyncState
        action={sRegisterPlayer}
        timeResolving={2000}
        timeRejecting={2000}
      />
      <FormRegisterPlayer onSubmit={handlePlayerRegistration} />
    </div>
  );
}

export { PageRegistrationPlayer };
