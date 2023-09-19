import { DataTuple } from "/src/components/misc/index.js";
import { useContextPackage } from "/src/contexts/index.js";
import { formatTime } from "/src/utils/index.js";

function PkgTupleTime({
  src,
  nok,
  nov,
  nop,
  noc,
  name = "t_start",
  label = "time start",
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
      name={name}
      label={label}
      value={value}
      pval={getTime}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getTime(src, value, name) {
  if (!(value ?? src[name])) return undefined;
  const parsedValue = formatTime(value ?? src[name]);
  return `${parsedValue.hour}${parsedValue.literal}${parsedValue.minute}${parsedValue.literal}${parsedValue.second}`;
}

export { PkgTupleTime };
