function daysInAMonth(month, year) {
  let result = new Date(year, month, 0).getDate();
  return result;
}
daysInAMonth(2, 2021);
