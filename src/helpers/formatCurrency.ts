export const FormatCurrency = (value: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const FormatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(dateObj);
};
