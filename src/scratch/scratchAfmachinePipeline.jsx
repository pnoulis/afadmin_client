import Button from "@mui/material/Button";
import { afmachine } from "/src/services/afmachine.js";
import { useNavigate } from "react-router-dom";

function RegisterPlayer() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        const p = afmachine.Player.random();
        console.log(p);
        afmachine
          .registerPlayer(p)
          .then((res) => {
            throw new Response("Not Found", { status: 404 });
          })
          .catch((err) => console.log("tyhnetuhnoetuh"));
      }}
      variant="contained"
    >
      register player
    </Button>
  );
}
export default function ScratchAfmachinePipeline() {
  return (
    <div>
      <h1>scratch afmachine pipeline</h1>
      <div>
        <RegisterPlayer />
      </div>
    </div>
  );
}
