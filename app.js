// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

import { inventorsBorn1500s } from "./modules/Exercises/inventorsBorn1500s.js";
import { inventorsFullnames } from "./modules/Exercises/inventorsFullnames.js"
import { sortedByBirthDate } from "./modules/Exercises/sortByBirthDate.js"
import { totalYearsLived } from "./modules/Exercises/totalYearsLived.js";
import { sortedByYearsLived } from "./modules/Exercises/sortByYearsLived.js"
import { sortedByLastName } from "./modules/Exercises/sortByLastName.js";
import { summedItems } from "./modules/Exercises/sumItemsInstances.js";
import { parisBoulevardsFound } from "./modules/Exercises/getBoulevards.js"

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(`1. Filter the list of inventors for those who were born in the 1500's`,
    inventorsBorn1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log(`2. Give us an array of the inventors' first and last names`, inventorsFullnames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log(`3. Sort the inventors by birthdate, oldest to youngest`,
    sortedByBirthDate
)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log(`4. How many years did all the inventors live?`,
    totalYearsLived)

// // 5. Sort the inventors by years lived
console.log(`5. Sort the inventors by years lived`,
    sortedByYearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log(`6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name`,
    parisBoulevardsFound)

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(`7. Sort the people alphabetically by last name`,
    sortedByLastName);


// 8. Reduce Exercise
// Sum up the instances of each of these [people array]
console.log(`8. Sum up the instances of each of these`,
    summedItems)