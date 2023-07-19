import * as aferrs from "agent_factory.shared/errors.js";
import { useContextApp, StoreProvideApp } from "/src/stores/index.js";
import { FormRegisterNewPlayer as FormRegisterNewPlayer__ } from "../components/forms/FormRegisterNewPlayer";

function recurseThrow() {
  const recurse = function recurse(n) {
    if (n == 3) {
      throw new aferrs.AgentFactoryError('yolo');
    }
  }
  return recurse();
}

function FormRegisterNewPlayer() {
  const { Afmachine, catchAferrs } = useContextApp();
  const Player = Afmachine.Player;
  return (
    <div>
      <h1>form register new player</h1>
      <div>
        <button
          onClick={() => {
            Afmachine.registerPlayer(Player.random({ password: "" })).catch(
              (err) => {
                console.log(err);
                console.log("LAST CATCHER");
                console.log(err);
                if (err instanceof Error) {
                  console.log("err is instace of erorr");
                }

                if (err instanceof aferrs.AgentFactoryError) {
                  console.log("err is instanceof AgentfactoryError");
                }
                if (err instanceof aferrs.ERR_BACKEND_VALIDATION) {
                  console.log("err is instanceof ERR_BACKEND_VAL");
                }

                if (err.constructor instanceof aferrs.AgentFactoryError) {
                  console.log("err is instanceof AgentfactoryError");
                }
                if (err.constructor instanceof aferrs.ERR_BACKEND_VALIDATION) {
                  console.log("err is instanceof ERR_BACKEND_VAL");
                }

                /* const n = new aferrs.AgentFactoryError('yolo'); */
                /* const o = aferrs.AgentFactoryError; */
                /* const n = err; */
                /* if (n instanceof Error) { */
                /*   console.log("err is instace of erorr"); */
                /* } */

                /* if (n instanceof o) { */
                /*   console.log("err is instanceof AgentfactoryError"); */
                /* } */
                /* if (n instanceof aferrs.ERR_BACKEND_VALIDATION) { */
                /*   console.log("err is instanceof ERR_BACKEND_VAL"); */
                /* } */
              },
            );
          }}
        >
          register player
        </button>
        {/* <FormRegisterNewPlayer__ */}
        {/*   onSubmit={(form) => { */}
        {/*     return Afmachine.registerPlayer(form).catch((err) => */}
        {/*       console.log("there was an error"), */}
        {/*     ); */}
        {/*   }} */}
        {/* /> */}
      </div>
    </div>
  );
}

export default function ScratchForm() {
  return (
    <StoreProvideApp>
      <div>
        <h1>Scratch Form</h1>
        <div style={{ width: "500px" }}>
          <FormRegisterNewPlayer />
        </div>
      </div>
    </StoreProvideApp>
  );
}
