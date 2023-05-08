import * as React from "react";
import { useAfmachine } from "/src/afmachine_interface/index.js";

function RequestAfmachine() {
  const {
    Afmachine,
    listenWristbandScan,
    listPlayers,
    loginPlayer,
    registerPlayer,
    searchPlayer,
    registerWristband,
    unregisterWristband,
  } = useAfmachine();
  return (
    <div>
      <h1>Request afmachine</h1>
      <h3
        onClick={() => {
          listPlayers()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        list players
      </h3>
      <h3
        onClick={() => {
          loginPlayer({
            username: "yolo",
            password: "yolo_password",
          })
            .then((res) => console.log(res))
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        login player
      </h3>

      <h3
        onClick={() => {
          registerPlayer({
            username: "test10",
            name: "test10_name",
            surname: "test10_surname",
            password: "test10_password",
            email: "test10@gmail.com",
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        register player
      </h3>
      <h3
        onClick={() =>
          searchPlayer("@maze.com")
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        search player
      </h3>

      <h3
        onClick={() => {
          listenWristbandScan({})
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        pair player wristband
      </h3>
      <h3
        onClick={() =>
          registerWristband({
            username: "test10",
            wristbandNumber: 100,
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        register wristband
      </h3>
      <h3
        onClick={() =>
          unregisterWristband({
            username: "test10",
            wristbandNumber: 100,
          })
            .then((res) => {
              console.log("WRISTBAND UNREGISTERED");
            })
            .catch((err) => console.log(err))
        }
      >
        unregister wristband
      </h3>
    </div>
  );
}

export default function ScratchAfmachine() {
  return (
    <div>
      <h1>Scratch Afmachine</h1>
      <RequestAfmachine />
    </div>
  );
}
