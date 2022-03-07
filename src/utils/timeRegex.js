export const timeRegex = (time) => {
  const today = new Date(time);
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);

  const result = `${hours}:${minutes}`;

  return result;
};
