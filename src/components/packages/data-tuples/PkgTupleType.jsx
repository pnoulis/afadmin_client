import { DataTuple } from "/src/components/misc/index.js";
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleType({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "type",
  value,
  dval,
  children,
}) {
  const pkg = (src ? src : !noc && useContextPackage().pkg) || {};

  return (
    <DataTuple
      src={pkg}
      nok={nok}
      nov={nov}
      nop={nop}
      name={"type"}
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { PkgTupleType };
