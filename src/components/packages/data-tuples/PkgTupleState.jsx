import { DataTuple } from "/src/components/misc/index.js";
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleState({
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
  const pkg = (src ? src : !noc && useContextPackage().pkg) || {};

  return (
    <DataTuple
      src={pkg}
      nok={nok}
      nov={nov}
      nop={nop}
      name={"state"}
      label={label}
      value={value}
      pval={getState}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getState(src, value) {
  let parsedValue;
  if (value) {
    parsedValue = value;
  } else {
    parsedValue = src.state?.name ?? src.state;
  }
  return parsedValue;
}

export { PkgTupleState };
