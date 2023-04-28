import * as React from "react";
import { Afmachine } from "afmachine";

Afmachine.init();
// const backendMqttClient = Afmachine.backendMqttClient;
// backendMqttClient.on("connect", () => {
//   console.log("connected");
// });
// backendMqttClient.on("connect", () => {
//   console.log("connected");
// });

export default function ScratchAfmachine() {
  return (
    <div>
      <h1>Scratch Afmachine</h1>
    </div>
  );
}
