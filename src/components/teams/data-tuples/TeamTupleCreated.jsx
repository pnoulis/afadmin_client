import { DataTuple } from "/src/components/misc/index.js";
import { formatTime } from "/src/utils/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleCreated({
  date = false,
  src,
  nok,
  nov,
  nop,
  noc,
  label = "created",
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
      name="created"
      label={label}
      value={value}
      pval={date ? getDate : getTime}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getDate(src, value, name) {
  if (!(value ?? src[name])) return undefined;
  const parsedValue = formatTime(value ?? src[name]);
  return `${parsedValue.day}-${parsedValue.month}-${parsedValue.year} ${parsedValue.hour}${parsedValue.literal}${parsedValue.minute}${parsedValue.literal}${parsedValue.second}`;
}

function getTime(src, value, name) {
  if (!(value ?? src[name])) return undefined;
  const parsedValue = formatTime(value ?? src[name]);
  return `${parsedValue.hour}${parsedValue.literal}${parsedValue.minute}${parsedValue.literal}${parsedValue.second}`;
}

export { TeamTupleCreated };
