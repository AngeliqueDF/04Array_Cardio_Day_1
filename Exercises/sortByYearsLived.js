import { inventors } from "./../data.js";

function sortByYearsLived(data) {
    let inventorsArray = data

    const sortedByYearsLived = inventorsArray.sort((a, b) => {
        return a.passed - a.year > b.passed - b.year ? 1 : -1;
    });

    return sortedByYearsLived
}

export const sortedByYearsLived = sortByYearsLived(inventors)