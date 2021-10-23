import { inventors } from "../../data.js";

function sortByBirthDate(data) {
    const result = data.sort((a, b) => {
        return a.year > b.year ? 1 : -1;
    });

    return result
}

export const sortedByBirthDate = sortByBirthDate(inventors)