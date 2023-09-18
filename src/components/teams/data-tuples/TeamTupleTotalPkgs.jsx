import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleTotalPkgs({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "total packages",
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
      name={"packages"}
      label={label}
      value={value}
      pval={getTotalPkgs}
      dval={dval}
    >
      {children}
    </DataTuple>
  );
}

function getTotalPkgs(src, value) {
  let parsedValue;
  if (value) {
    parsedValue = value;
  } else if (src.packages?.length > 0) {
    parsedValue = src.packages.length;
  }
  return parsedValue;
}

export { TeamTupleTotalPkgs };
