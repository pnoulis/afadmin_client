import { DataTuple } from "/src/components/misc/index.js";
import { useContextPackage } from "/src/contexts/index.js";
import { t_mstom } from "agent_factory.shared/utils/misc.js";

function PkgTupleAmount({
  src,
  nok,
  nov,
  nop,
  noc /* Do not access context */,
  label = "amount",
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
      name={"amount"}
      label={label}
      value={value}
      pval={getAmount}
      dval={dval}
      renderValue={(props) => (
        <>
          <span className={props.className}>{props.value ?? props.dval}</span>
          <span className="suffix">{props.suffix}</span>
        </>
      )}
    >
      {children}
    </DataTuple>
  );
}

function getAmount(src, value) {
  let parsedValue;
  let suffix;
  if (value) {
    parsedValue = value;
  } else {
    parsedValue = src.amount;
  }

  switch (src.type) {
    case "mission":
      suffix = "missions";
      break;
    case "time":
      parsedValue = Math.ceil(t_mstom(parsedValue));
      suffix = "minutes";
      break;
    default:
      if (src.type) {
        throw new Error(`Unrecognized pkg type: ${src.type}`);
      }
      break;
  }
  return {
    value: parsedValue,
    suffix,
  };
}

export { PkgTupleAmount };
