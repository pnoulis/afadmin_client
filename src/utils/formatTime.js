function formatTime(time, { locale = "en-US" } = {}) {
  time ??= Date.now();

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    weekday: "short",
    day: "numeric",
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
