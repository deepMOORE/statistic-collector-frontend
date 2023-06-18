export const dateToClientMonthFormat = (
  date: Date,
): string => {
  const monthName = date.toLocaleString('RU', { month: 'long' });
  const year = date.getFullYear();

  return `${monthName}, ${year}`;
};

