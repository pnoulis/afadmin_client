import { Button } from "@mui/material";
import { session } from "/src/services/session.js";
import { useUser } from "/src/hooks/index.js";
import { Authorize } from "/src/components/auth/Authorize.jsx";
import { afmachine } from "/src/services/afmachine.js";

function Not() {
  return <p>not</p>;
}

function SetStorage() {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <Authorize>
        {(authorized) =>
          authorized ? (
            <Button
              variant="contained"
              onClick={() => {
                const s = session.get();
                console.log(s);
              }}
            >
              get session
            </Button>
          ) : (
            <Not />
          )
        }
      </Authorize>
      <Button
        variant="contained"
        onClick={() => {
          session.set("user", { name: "pavlos", sessionId: "qteuheon" });
          const s = session.get("user");
          console.log(s);
        }}
      >
        change session
      </Button>
      <Button
        onClick={() => {
          afmachine.checkSession();
        }}
      >
        check afmachine
      </Button>
    </div>
  );
}

export default function scratchSession() {
  return (
    <div>
      <h1>scratch session</h1>
      <div>
        <SetStorage />
      </div>
    </div>
  );
}
