// Function to display date, day, month, and year for a given date
function displayDateInfo(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    console.log(`Date: ${day}`);
    console.log(`Day: ${dayOfWeek}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
}

// Get the current date
const currentDate = new Date();

// Display information for the current date
console.log("Current Date:");
displayDateInfo(currentDate);

// Calculate date 7 days before the current date
const sevenDaysBefore = new Date(currentDate);
sevenDaysBefore.setDate(currentDate.getDate() - 7);

// Display information for the date 7 days before the current date
console.log("\nDate 7 days before:");
displayDateInfo(sevenDaysBefore);

// Calculate date 7 days after the current date
const sevenDaysAfter = new Date(currentDate);
sevenDaysAfter.setDate(currentDate.getDate() + 7);

// Display information for the date 7 days after the current date
console.log("\nDate 7 days after:");
displayDateInfo(sevenDaysAfter);
