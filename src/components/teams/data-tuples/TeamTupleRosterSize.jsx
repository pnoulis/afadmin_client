import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleRosterSize({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "players",
  value,
  dval,
  children,
}) {
  const team = (src ? src : !noc && useContextTeam().team) || {};
  return (
    <DataTuple
      src={team}
      nok={nok}
      nov={nov}
      nop={nop}
      name={"roster"}
      label={label}
      value={value}
      pval={getRosterSize}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getRosterSize(src, value) {
  let parsedValue;
  if (value) {
    parsedValue = value;
  } else {
    parsedValue = src.roster?.size ?? src.roster?.length;
  }
  return parsedValue;
}

export { TeamTupleRosterSize };
