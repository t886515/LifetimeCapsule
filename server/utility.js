exports.parseDate = ([years, months, days]) => {
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  let unearthYear = currentYear + years;
  let unearthMonth = currentMonth + months;
  let unearthDay = currentDay + days;

  return new Date([unearthYear, unearthMonth, unearthDay]);
};
