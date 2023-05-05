import * as React from "react";
import { getEvents } from "./getEvents.js";
import { Afmachine } from "./Afmachine.js";

const useAfmachine = () => ({ Afmachine, ...getEvents(Afmachine) });

export { useAfmachine };
