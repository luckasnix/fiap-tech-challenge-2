export const formatDateLong = (timestamp: number): string => {
  const data = new Date(timestamp);

  const dayName = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
  }).format(data);
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();

  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  return `${capitalizedDayName}, ${day}/${month}/${year}`;
};
