import { Afmachine } from "afmachine";
import { Player } from "afmachine/player";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as Context from "./store.jsx";
import { useAfmachineStates } from "./hookState.js";

// Afmachine.boot();

function PlayerStore({ player, children }) {
  return (
    <Context.ContextProvidePlayer value={player}>
      {children}
    </Context.ContextProvidePlayer>
  );
}

function PlayerUsername() {
  const { username } = Context.useContextPlayer();
  return <p>{username}</p>;
}

function PlayerState() {
  const ctx = Context.useContextPlayer();
  const state = useAfmachineStates(ctx);
  return <p>{state}</p>;
}

function PlayerRegister() {
  const ctx = Context.useContextPlayer();
  return (
    <button
      onClick={() => {
        console.log(`will try register ${ctx.username}`);
        ctx
          .register()
          .then((res) => {
            console.log(res.getState());
          })
          .catch((err) => console.log("error"));
      }}
    >
      {" "}
      register me
    </button>
  );
}

function RegistrationStates({ player = {} }) {
  const state = useAfmachineStates(player.registration);
  return <p>player registration at: ${state}</p>;
}

function App() {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    Afmachine.list().then((p) => {
      setPlayers(p.map((_) => new Player(_)));
    });
  }, []);

  React.useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <>
      <button
        onClick={() => {
          players[0].register();
        }}
      >
        register first player
      </button>
      <button
        onClick={() => players[0].setState(players[0].getRegisteredState)}
      >
        check state
      </button>
      {players.map((p, i) => (
        <PlayerStore player={p} key={i}>
          <PlayerUsername />
          <PlayerState />
          <PlayerRegister />
          <RegistrationStates player={p} />
          <hr />
        </PlayerStore>
      ))}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
);
