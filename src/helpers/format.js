function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function formatDateToUTCString(dateStr) {
  // Split the input date string into day, month, and year components
  const [day, month, year] = dateStr.split(".");

  // Create a Date object (note: months are 0-based in JavaScript Date object)
  const date = new Date(Date.UTC(year, month - 1, day));

  // Convert the Date object to a UTC date string
  const utcDateString = date.toISOString();

  return utcDateString;
}

export { formatDate, formatDateToUTCString };
