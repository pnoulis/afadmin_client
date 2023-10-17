import { DataTuple } from "/src/components/misc/index.js";

function DeviceTupleType({
  device,
  nok,
  nov,
  nop,
  noc,
  label = "type",
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
      name="deviceType"
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { DeviceTupleType };
