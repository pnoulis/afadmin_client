import * as React from "react";
import { useCtxGroupParty, ProvideStoreGroupParty } from "/src/stores/index.js";

function GroupParty() {
  const ctx = useCtxGroupParty();
  return (
    <div>
      group party {ctx.teams[0].name}
      <button
        onClick={() => {
          const team = ctx.generateGroupPartyTeam();
          console.log(team);
        }}
      >
        generate roster
      </button>
    </div>
  );
}

export default function ScratchGroupParty() {
  return (
    <div>
      <h1>Scratch group party</h1>
      <div>
        <ProvideStoreGroupParty>
          <GroupParty />
        </ProvideStoreGroupParty>
      </div>
    </div>
  );
}
