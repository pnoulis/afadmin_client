import * as React from "react";
import { ContextProvideGroupParty } from "/src/contexts/index.js";
import { useGroupParty } from "/src/components/group_party/index.js";

function GroupParty({ groupParty, children, create, ...options }) {
  const ctx = useGroupParty(groupParty, create, options);
  return (
    <ContextProvideGroupParty ctx={ctx}>{children}</ContextProvideGroupParty>
  );
}

export { GroupParty };
