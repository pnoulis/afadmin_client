function formatTime(time, { locale = "en-US" } = {}) {
  time ??= Date.now();

  return new Intl.DateTimeFormat(locale, {
    year: "2-digit",
    month: "2-digit",
    weekday: "short",
    day: "2-digit",
    hour: "2-digit",
    second: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
  })
    .formatToParts(time ?? Date.now())
    .reduce((car, cdr) => {
      car[cdr.type] = cdr.value;
      return car;
    }, {});
}

export { formatTime };
