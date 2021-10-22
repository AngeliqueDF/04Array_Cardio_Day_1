import { inventorsBorn1500s } from "./modules/Exercises/inventorsBorn1500s.js";
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
    `1. Filter the list of inventors for those who were born in the 1500's`,
    inventorsBorn1500s)

// const solutions = document.getElementById("solutions");

// function printSolutions(result, solutionName) {
//     let newUL = document.createElement("ul");
//     solutions.appendChild(newUL);
//     let name = document.createTextNode(solutionName);
//     newUL.appendChild(name);

//     const createNode = (result) => {
//         let listItem = document.createElement("li");
//         newUL.appendChild(listItem);
//         let itemContent = document.createTextNode(result);
//         newUL.appendChild(itemContent);
//         listItem.appendChild(itemContent);
//     };

//     if (typeof result === "number") {
//         result = result.toString();
//         createNode(result);
//     } else if (Array.isArray(result)) {
//         result.forEach((element) => {
//             element = JSON.stringify(element);
//             createNode(element);
//         });
//     }
// }

// const filtered = inventors.filter(
//     (inventor) => inventor.year > 1499 && inventor.year < 1600
// );
// const formattedFiltered = filtered.map((inventor) => {
//     return `${inventor.first} ${inventor.last}, born ${inventor.year}`;
// });

// const inventorsSorted = formattedFiltered;
// printSolutions(
//     inventorsSorted,
//     "Filtered the list of inventors for those who were born in the 1500's"
// );

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// const mapped = inventors.map((inventor) => {
//     return `${inventor.first} ${inventor.last}`;
// });
// printSolutions(
//     mapped,
//     "Give us an array of the inventors' first and last names"
// );

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const sortAge = inventors.sort((a, b) => {};
// const sortAge = inventors.sort((a, b) => {
//     return a.year > b.year ? 1 : -1;
// });
// const sortAgeFormatted = sortAge.map((inventor) => {
//     return `${inventor.year} : ${inventor.first} ${inventor.last}`;
// });
// printSolutions(
//     sortAgeFormatted,
//     "Sort the inventors by birthdate, oldest to youngest"
// );

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// let initialValue = 0;
// const yearsLived = inventors.reduce((accumulator, currentValue) => {
//     return accumulator + (currentValue.passed - currentValue.year);
// }, initialValue);
// printSolutions(
//     yearsLived,
//     "How many years did all the inventors live?"
// );

// // 5. Sort the inventors by years lived
// const sortLifetime = inventors.sort((a, b) => {
//     return a.passed - a.year > b.passed - b.year ? 1 : -1;
// });
// const sortLifetimeFormatted = sortLifetime.map((inventor) => {
//     return `${inventor.first} ${inventor.last}`;
// });
// printSolutions(
//     sortLifetimeFormatted,
//     "Sort the inventors by years lived"
// );

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name



// 8. Reduce Exercise
// Sum up the instances of each of these