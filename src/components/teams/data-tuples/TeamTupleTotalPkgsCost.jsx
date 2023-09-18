import { DataTuple } from "/src/components/misc/index.js";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTupleTotalPkgsCost({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "total packages cost",
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
      pval={getTotalPkgsCost}
      dval={dval}
      renderValue={(props) => (
        <>
          <span className={props.className}>{props.value ?? props.dval}</span>
          {props.value && <span className="suffix">{"\u20AC"}</span>}
        </>
      )}
    >
      {children}
    </DataTuple>
  );
}

function getTotalPkgsCost(src, value) {
  let parsedValue;
  if (value) {
    parsedValue = value;
  } else if (src.packages?.length > 0) {
    parsedValue = 0;
    for (let i = 0; i < src.packages.length; i++) {
      parsedValue += src.packages[i].cost;
    }
  }
  return parsedValue;
}

export { TeamTupleTotalPkgsCost };
