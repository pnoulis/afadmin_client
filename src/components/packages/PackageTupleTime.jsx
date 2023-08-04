import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import { CssPackageTuple } from "./PackageTuple.jsx";

const getTime = (() => {
  let currentLang;
  let locale;
  const time = new Map();
  return (timestamp, lang = "en-uS") => {
    const date = new Date(timestamp || Date.now());
    if (typeof locale === "undefined" || lang !== currentLang) {
      locale = new Intl.DateTimeFormat(lang, {
        month: "short",
        weekday: "short",
        day: "numeric",
        hour: "2-digit",
        second: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      });
    }
    locale
      .formatToParts(timestamp)
      .forEach((el) => time.set(el.type, el.value));
    return Object.fromEntries(time);
  };
})();

function PackageTupleTime({ name, label, nok = false } = {}) {
  const { pkg } = useContextPackage();

  const t = React.useMemo(() => {
    const field = pkg[name];
    if (field) {
      const { hour, minute, literal } = getTime(field);
      return `${hour}${literal}${minute}`;
    } else {
      return "-";
    }
  }, [pkg, name]);

  return (
    <>
      {!nok && <span className="key">{label || name || "time"}</span>}
      <span className="value">{t}</span>
    </>
  );
}

const CssPackageTupleTime = css`
  ${CssPackageTuple}
  `;

const StylePackageTupleTime = styled.div`
  ${CssPackageTupleTime}
`;

function StyledPackageTupleTime({ label, nok, className, ...props }) {
  return (
    <StylePackageTupleTime className={className || ""} {...props}>
      <PackageTupleTime nok={nok} label={label} {...props} />
    </StylePackageTupleTime>
  );
}

export {
  PackageTupleTime,
  CssPackageTupleTime,
  StylePackageTupleTime,
  StyledPackageTupleTime,
};
