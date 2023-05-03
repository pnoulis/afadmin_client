import * as React from "react";
import {
  useAfmachineCtx,
  ProvideAfmachine,
} from "/src/afmachine_interface/index.js";

function RequestAfmachine() {
  const { listPlayers, loginPlayer, registerPlayer } = useAfmachineCtx();
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
            username: "yolo",
            name: "yolo_name",
            surname: "yolo_surname",
            password: "yolo_password",
            email: "yolo_email@gmail.com",
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        register player
      </h3>
    </div>
  );
}

export default function ScratchAfmachine() {
  return (
    <ProvideAfmachine>
      <div>
        <h1>Scratch Afmachine</h1>
        <RequestAfmachine />
      </div>
    </ProvideAfmachine>
  );
}
