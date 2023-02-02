export function getDateString(date: Date, lang = "en", short = false): string {
  // modify date string to output DD Month YYYY

  const monthNames = [
    { long: { en: "January", da: "Januar" }, short: { en: "Jan", da: "Jan" } },
    {
      long: { en: "February", da: "Februar" },
      short: { en: "Feb", da: "Feb" },
    },
    { long: { en: "March", da: "Marts" }, short: { en: "Mar", da: "Mar" } },
    { long: { en: "April", da: "April" }, short: { en: "Apr", da: "Apr" } },
    { long: { en: "May", da: "Maj" }, short: { en: "May", da: "Maj" } },
    { long: { en: "June", da: "Juni" }, short: { en: "Jun", da: "Jun" } },
    { long: { en: "July", da: "Juli" }, short: { en: "Jul", da: "Jul" } },
    { long: { en: "August", da: "August" }, short: { en: "Aug", da: "Aug" } },
    {
      long: { en: "September", da: "September" },
      short: { en: "Sep", da: "Sep" },
    },
    { long: { en: "October", da: "Oktober" }, short: { en: "Oct", da: "Okt" } },
    {
      long: { en: "November", da: "November" },
      short: { en: "Nov", da: "Nov" },
    },
    {
      long: { en: "December", da: "December" },
      short: { en: "Dec", da: "Dec" },
    },
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // conditional returns
  if (short === true) {
    return lang === "da"
      ? `${day} ${month.short.da} ${year}`
      : `${day} ${month.short.en} ${year}`;
  } else {
    return lang === "da"
      ? `${day} ${month.long.da} ${year}`
      : `${day} ${month.long.en} ${year}`;
  }
}
