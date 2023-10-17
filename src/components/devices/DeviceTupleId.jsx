import { DataTuple } from "/src/components/misc/index.js";

function DeviceTupleId({
  device,
  nok,
  nov,
  nop,
  noc,
  label = "id",
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
      name="deviceId"
      label={label}
      value={value}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

export { DeviceTupleId };
