import { useAfmachineEntity } from "/src/hooks/useAfmachineEntity.jsx";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { PersistentPlayer } from "../components/players/PersistentPlayer";

export default function () {
  return (
    <div>
      <h1>scratch use afmachine entity</h1>
      <p>state is</p>
      <PersistentPlayer>yolo</PersistentPlayer>
    </div>
  );
}
