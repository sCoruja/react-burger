export const convertTime = (stringDate: string) => {
  const date = new Date(stringDate);
  const current = new Date();
  const daysAgo =
    current.getDay() -
    date.getDay() +
    (current.getMonth() - date.getMonth()) * 31 +
    (current.getFullYear() - date.getFullYear()) * 365;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const offset =
    date.getHours() - date.getUTCHours() > -11
      ? date.getHours() - date.getUTCHours()
      : date.getHours() - date.getUTCHours() + 24;
  const day =
    daysAgo === 0
      ? "Сегодня"
      : daysAgo === 1
      ? "Вчера"
      : daysAgo > 7
      ? date.toLocaleDateString()
      : daysAgo % 10 >= 2 && daysAgo % 10 <= 4
      ? `${daysAgo} дня назад`
      : `${daysAgo} дней назад`;
  return `${day}, ${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} i-GMT${offset > 0 ? "+" : ""}${offset}`;
};
