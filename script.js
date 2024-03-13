// In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
// new date () The Date object has a number of methods that allow you to get the date and time in different formats.
// One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date.
// The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.
// The .getFullYear() method returns a number which represents the year for the provided date.
// The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.
// The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.
// Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable.
// In JavaScript, the change event is used to detect when the value of an HTML element has changed.
// When a user makes a selection from the dropdown menu, the function should get the user's value and display the date in their chosen date format. To do this, use the switch statement.
// A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.
// The .reverse() method is used to reverse an array in place.
// Finally, need to create a string with the reversed array elements separated by dash (-) character.
// If switch statement is going to have multiple cases, it is best practice to include a break statement.
// The break statement will tell the JavaScript interpreter to stop executing statements. Without adding a break statement at the end of each case block, the program will execute the code for all matching cases
// In a switch statement, the default case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases

const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
  }
});
