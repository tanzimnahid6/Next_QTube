export function formattedDate(inputDateString) {
  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(inputDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
  }
  
  const inputDateString = "November 1, 2023";
  const res = formattedDate(inputDateString);
  
  console.log(res); // Output: 11-01-23
  