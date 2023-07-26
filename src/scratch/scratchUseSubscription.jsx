import * as React from "react";
import { Button } from "@mui/material";
import { Afmachine } from "/src/app/afmachine.js";

function useSubscription(topic, onMsg) {
  const [subscribed, setSubscribed] = React.useState(false);
  const [msg, setMsg] = React.useState(null);
  const unsubRef = React.useRef(null);

  const subscribe = function (unsub) {
    unsubscribe();
    unsubRef.current = unsub;
    setSubscribed(true);
  };

  const unsubscribe = function () {
    if (typeof unsubRef.current === "function") {
      unsubRef.current();
      unsubRef.current = null;
      setSubscribed(false);
    }
  };

  const listener = function (unsubed, err, msg) {
    if (unsubed && subscribed) {
      unsubRef.current = null;
      setSubscribed(false);
    }
    setMsg(err || msg);
  };

  React.useEffect(
    function () {
      if (!(topic in Afmachine)) {
        throw new Error(`Subscription topic ${topic} missing from Afmachine`);
      }
      Afmachine[topic]({ listener })
        .then(subscribe.bind(null))
        .catch(listener.bind(null, false));
      return unsubscribe;
    },
    [topic],
  );

  React.useEffect(() => {
    if (msg && typeof onMsg === "function") {
      onMsg(msg);
    }
  }, [msg, setMsg]);

  return [msg, subscribed, unsubscribe];
}

function Container() {
  const [topic, setTopic] = React.useState("");
  const [msg, subbed, unsub] = useSubscription(
    "onWristbandRegistration",
    (msg) => {
      console.log("MESSAGE HANDLER");
    },
  );

  React.useEffect(() => {
    console.log(msg);
    console.log("new message from subscription");
  }, [msg]);

  return (
    <div>
      <h1>subscription {topic}</h1>
      <form>
        <input
          style={{ border: "2px solid black" }}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
export default function ScratchUseSubscription() {
  const [change, setChange] = React.useState("");
  return (
    <div>
      <h1>Scratch useSubscription</h1>
      <div>
        <Container />
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setChange(Math.random());
        }}
      >
        change
      </Button>
      {change}
    </div>
  );
}
