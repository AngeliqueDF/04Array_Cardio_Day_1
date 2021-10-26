import { inventors } from "./../data.js";

function sortByBirthDate(data) {

    let inventorsArray = data;
    let result = [];

    let sorted = inventorsArray.sort((a, b) => {
        return b.year - a.year
    });

    sorted.forEach(e => {
        result.push(e)
    });

    return result
}

export const sortedByBirthDate = sortByBirthDate(inventors)