import { DataTuple } from "/src/components/misc/index.js";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTupleUsername({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "username",
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
      name={"username"}
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { PlayerTupleUsername };
