import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleState({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "status",
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
      name={"state"}
      label={label}
      value={value}
      pval={getTeamState}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getTeamState(src, value) {
  let parsedValue;
  if (value) {
    parsedValue = value;
  } else {
    parsedValue = src.state?.name ?? src.state;
  }
  return parsedValue;
}

export { TeamTupleState };
