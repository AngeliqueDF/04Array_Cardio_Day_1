import { inventors } from "../../data.js";

function sortByYearsLived(data) {
    const sortedByYearsLived = inventors.sort((a, b) => {
        return a.passed - a.year > b.passed - b.year ? 1 : -1;
    });

    return sortedByYearsLived
}

export const sortedByYearsLived = sortByYearsLived(inventors)