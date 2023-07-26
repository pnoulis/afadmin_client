import styled from "styled-components";
import { Afmachine } from "/src/app/afmachine.js";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { useContextPlayer } from "/src/contexts/index.js";
import { WidgetTrash } from "/src/components/widgets/index.js";
import {
  ActionCardPlayerReference,
} from "../components/players";
import "./scratch.css";

const StyledActionCardPlayerLayout = styled.article`
display: grid;
width: 50px;
background-color: red;
.text {
word-wrap: break-word;
overflow-wrap: anywhere;
}
`;

function InfoCardNew({ className, ...props }) {
  // return (
  //   <StyledActionCardPlayerLayout>
  //     <span className='text'>
  //       oheunthoeuntoehu
  //     </span>
  //   </StyledActionCardPlayerLayout>
  // );
  return <ActionCardPlayerReference/>;
  // return (
  //   <StyledActionCardPlayerLayout>
  //     <IndicatorWristbandSignal
  //       style={{ gridRow: "1 / 2" }}
  //     />
  //     <StyledPlayerTuple nok name="username" style={{ gridRow: "2 / 3", fontSize: "var(--tx-nl)", fontFamily: "NoirPro-Medium" }} />
  //     <StyledPlayerTupleState
  //       nok
  //       style={{
  //         gridRow: "3 / 4",
  //         width: "min-content",
  //       }}
  //     />
  //     <WidgetTrash
  //       tooltipContent="remove player"
  //       style={{ gridRow: "4 / 5" }}
  //     />
  //   </StyledActionCardPlayerLayout>
  // );
}

export default function ScratchPlayer() {
  return (
    <div>
      <h1>Scratch player</h1>
      <div>
      </div>
    </div>
  );
}
