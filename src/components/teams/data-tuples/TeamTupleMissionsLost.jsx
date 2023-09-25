import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleMissionsLost({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "missions lost",
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
      name="losses"
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { TeamTupleMissionsLost };
