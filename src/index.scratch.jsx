import * as React from "react";
import * as ReactDOM from "react-dom/client";
const pp = 'precompiled-mqtt';
const mqtt = await import(/* @vite-ignore */`${pp}`);
console.log(mqtt);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <div>scratch yolo</div>
  </React.StrictMode>,
);
