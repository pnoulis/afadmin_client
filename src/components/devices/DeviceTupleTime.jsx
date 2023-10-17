import { DataTuple } from "/src/components/misc/index.js";
import { formatTime } from "/src/utils/index.js";

function DeviceTupleTime({
  device,
  nok,
  nov,
  nop,
  noc,
  label = "time",
  name,
  value,
  dval,
  children,
}) {
  return (
    <DataTuple
      src={device}
      nok={nok}
      nov={nov}
      nop={nop}
      noc={noc}
      name={name}
      label={label}
      value={value}
      dval={dval}
      pval={getTime}
    >
      {children}
    </DataTuple>
  );
}

function getTime(src, value, name) {
  if (!(value ?? src?.[name])) return undefined;
  const parsedValue = formatTime(value ?? src?.[name]);
  return `${parsedValue.day}-${parsedValue.month}-${parsedValue.year} ${parsedValue.hour}${parsedValue.literal}${parsedValue.minute}${parsedValue.literal}${parsedValue.second}`;
}

export { DeviceTupleTime };
