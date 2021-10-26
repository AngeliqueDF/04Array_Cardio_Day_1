import { parisBoulevards } from "./../data.js";

function findBoulevards(data) {
    return data.filter((boulevard) => /( de )/i.test(boulevard))
}

export const parisBoulevardsFound = findBoulevards(parisBoulevards);