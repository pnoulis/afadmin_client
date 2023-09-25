import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleMissionsWon({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "missions won",
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
      name="wins"
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { TeamTupleMissionsWon };
