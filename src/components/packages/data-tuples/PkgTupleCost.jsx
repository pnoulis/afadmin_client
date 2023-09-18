import { DataTuple } from "/src/components/misc/index.js";
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleCost({
  src,
  nok,
  nov,
  nop,
  noc,
  label = "cost",
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
      name={"cost"}
      label={label}
      value={value}
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

export { PkgTupleCost };
