import { people } from "../../data.js";

function getLastNames(data) {

    const lastNames = data.map((element, index) => {
        return element.split(', ')[0]
    })

    return lastNames
}

function sortByLastName(data) {

    const lastNames = getLastNames(data)

    const sortedByLastName = lastNames.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    return sortedByLastName
}

export const sortedByLastName = sortByLastName(people);