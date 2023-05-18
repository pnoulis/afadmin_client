import * as React from "react";
import { App, useAppCtx } from "/src/app/index.js";
import styled from "styled-components";

const StyleButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-right: 5px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

function Component() {
  const [someRandomState, setSomeRandomState] = React.useState(2);
  const [someState, setSomeState] = React.useState(1);
  const app = useAppCtx();

  return (
    <div>
      <div>
        <StyleButton
          onClick={() => {
            const { registerPlayer } = app;
            registerPlayer({
              username: "yolo3_username",
              name: "yolo3_name",
              surname: "yolo3_surname",
              password: "yolo3_password",
              email: "yolo3_email@gmail.com",
            });
          }}
        >
          register player
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { loginPlayer } = app;
            loginPlayer({
              username: "yolo3_username",
              password: "yolo3_password",
            });
          }}
        >
          login player
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { registerWristband } = app;
            registerWristband({
              username: "yolo3_username",
              name: "yolo3_name",
              surname: "yolo3_surname",
              password: "yolo3_password",
              email: "yolo3_email@gmail.com",
              wristbandMerged: true,
              wristband: {
                wristbandNumber: 99,
                wristbandColor: 7,
                active: false,
              },
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => console.log(err));
          }}
        >
          register wristband
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { unregisterWristband } = app;
            unregisterWristband({
              username: "yolo3_username",
              wristband: {
                wristbandNumber: 99,
              },
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          unregister wristband
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { selectPlayerWristbandRegistration } = app;
            selectPlayerWristbandRegistration({
              username: "yolo3_username",
              wristbandMerged: false,
              wristband: {
                wristbandNumber: 99,
                wristbandColor: 6,
                active: true,
              },
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          select player wristband registration
        </StyleButton>
        <br />
        <StyleButton
          onClick={() => {
            const { toggleWristbandPairing } = app;
            toggleWristbandPairing({})
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          toggle wristband pairing mode
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { createTeam } = app;
            createTeam(
              [
                {
                  username: "yolo5_username",
                  name: "test1_name",
                  surname: "test1_surname",
                  email: "test1_email@gmail.com",
                  password: "test1_password",
                  wristbandMerged: false,
                  wristband: {
                    wristbandNumber: 10,
                    wristbandColor: 0,
                    active: true,
                  },
                },
              ],
              "team_test3"
            )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          create team
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { listTeams } = app;
            listTeams()
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          list teams
        </StyleButton>
        <StyleButton
          onClick={() => {
            const { listPackages } = app;
            listPackages()
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          list packages
        </StyleButton>
      </div>
    </div>
  );
}

export default function ScratchApp() {
  return (
    <div>
      <h1>Scratch app</h1>
      <div>
        <App>
          <Component />
        </App>
      </div>
    </div>
  );
}
