import { DataTuple } from "/src/components/misc/index.js";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTupleEmail({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "email",
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
      name={"email"}
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { PlayerTupleEmail };
