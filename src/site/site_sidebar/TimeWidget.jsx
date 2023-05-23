import * as React from "react";
import styled from "styled-components";

const LANG = "en-US";

const StyleLayoutTimeWidget = styled.div`
  all: unset;
  /* Type */
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Dimensions */
  /* Position */
  /* Fonts */
  color: white;
  /* Effects */
  /* Children */
`;

const StyleLayoutTimeWidgetItemTime = styled.p`
  all: unset;
  /* Type */
  box-sizing: border-box;
  /* Dimensions */
  /* Position */
  /* Fonts */
position: relative;
  left: 5px;
  font-size: 1.7em;
  letter-spacing: 3px;
  font-family: NoirPro-Medium;
  /* Effects */
  /* Children */

  & > i {
    font-weight: bold;
  }

  .hour::after,
  .minute::after {
    content: ":";
    margin: 0 3px;
  }

  .seconds {
    display: inline-block;
    width: 55px;
  }
`;
const StyleLayoutTimeWidgetItemDate = styled.p`
  all: unset;
  /* Type */
  box-sizing: border-box;
  /* Dimensions */
  /* Position */
  position: relative;
  top: -3px;
  left: -1px;
  /* Fonts */
  font-size: 1em;
  letter-spacing: 0.5px;
  /* Effects */
  transform: translateX(-50%, 50%);
  /* Children */

  .weekday::after,
  .month::before {
    content: ",";
    margin: 0 5px;
  }
`;

const getTime = (() => {
  let currentLang;
  let locale;
  const time = new Map();
  return (lang) => {
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
    locale.formatToParts().forEach((el) => {
      switch (el.type) {
        case "month":
          return time.set(el.type, el.value);
        case "weekday":
          return time.set(el.type, el.value);
        case "day":
          return time.set(el.type, el.value);
        case "hour":
          return time.set(el.type, el.value);
        case "minute":
          return time.set(el.type, el.value);
        case "second":
          return time.set(el.type, el.value);
        default:
          break;
      }
    });
    return Object.fromEntries(time);
  };
})();

function TimeWidget({ lang = LANG }) {
  const [time, setTime] = React.useState(() => getTime(lang));

  React.useEffect(() => {
    const event = setInterval(() => setTime(getTime(lang)), 1000);
    return () => clearInterval(event);
  }, [lang]);

  return (
    <StyleLayoutTimeWidget>
      <StyleLayoutTimeWidgetItemTime>
        <i className="hour">{time.hour - 1}</i>
        <i className="minute">{time.minute}</i>
        <i className="seconds">{time.second}</i>
      </StyleLayoutTimeWidgetItemTime>
      <StyleLayoutTimeWidgetItemDate>
        <i className="weekday">{time.weekday}</i>
        <i>{time.day}</i>
        <i className="month">{time.month}</i>
      </StyleLayoutTimeWidgetItemDate>
    </StyleLayoutTimeWidget>
  );
}

export { TimeWidget };
