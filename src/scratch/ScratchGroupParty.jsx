import * as React from "react";
import { useCtxGroupParty, ProvideStoreGroupParty } from "/src/stores/index.js";
import { App, useAppCtx } from "/src/app/index.js";

function GroupParty() {
  const ctx = useCtxGroupParty();
  const { ensureUniqueWristbandColor, validateWristband } = useAppCtx();

  return (
    <div>
      group party {ctx.teams[0].name}
      <button
        style={{ display: "block" }}
        onClick={() => {
          const team = ctx.generateGroupPartyTeam();
          console.log(team);
        }}
      >
        generate roster
      </button>
      <button
        style={{ display: "block" }}
        onClick={() => {
          const team = {
            name: "test1",
            roster: [
              {
                name: "test2",
                wristband: {
                  wristbandColor: 2,
                },
              },
              {},
            ],
          };

          ensureUniqueWristbandColor(team, { wristbandColor: 2 });
        }}
      >
        ensure unique wristband scan
      </button>
      <button
        style={{ display: "block" }}
        onClick={() => {
          validateWristband({ wristbandNumber: 500 })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        validate wristband
      </button>
    </div>
  );
}

export default function ScratchGroupParty() {
  return (
    <div>
      <h1>Scratch group party</h1>
      <div>
        <App>
          <ProvideStoreGroupParty>
            <GroupParty />
          </ProvideStoreGroupParty>
        </App>
      </div>
    </div>
  );
}
