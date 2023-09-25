import { DataTuple } from "/src/components/misc/index.js";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTupleName({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "first name",
  value,
  dval,
  children,
}) {
  const player = (src ? src : !noc && useContextPlayer().player) || {};
  return (
    <DataTuple
      src={player}
      nok={nok}
      nov={nov}
      nop={nop}
      name={"name"}
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { PlayerTupleName };
