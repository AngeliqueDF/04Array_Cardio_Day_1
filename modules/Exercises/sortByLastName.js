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
        return a.last > b.last ? 1 : -1;
    });

    return sortedByLastName
}

export const sortedByLastName = sortByLastName(people);