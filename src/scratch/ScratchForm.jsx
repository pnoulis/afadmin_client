import * as aferrs from "agent_factory.shared/errors.js";
import { useContextApp, StoreProvideApp } from "/src/stores/index.js";
import { FormPlayer as __FormPlayer } from "../components/forms/index.js";

function FormRegisterNewPlayer() {
  const { Afmachine, catchAferrs } = useContextApp();
  const Player = Afmachine.Player;
  return (
    <div>
      <h1>form register new player</h1>
      <div>
        {/* <button */}
        {/*   onClick={() => { */}
        {/*     Afmachine.registerPlayer(Player.random({ password: "" })).catch( */}
        {/*       catchAferrs(false), */}
        {/*     ); */}
        {/*   }} */}
        {/* > */}
        {/*   register player */}
        {/* </button> */}
        <__FormPlayer
          onSubmit={(form) => {
            return Afmachine.registerPlayer(form).catch(catchAferrs());
          }}
        />
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
