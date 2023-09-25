import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleMissionsPlayed({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "missions played",
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
      name="played"
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { TeamTupleMissionsPlayed };
