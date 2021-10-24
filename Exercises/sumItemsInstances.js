import { transportation } from "./../../data.js"

function reduceItems(data) {
    const summedItems = data.reduce(function (allTransportation, transportation) {
        if (transportation in allTransportation) {
            allTransportation[transportation]++;
        } else {
            allTransportation[transportation] = 1;
        }
        return allTransportation;
    }, {})
    return summedItems
}

export const summedItems = reduceItems(transportation)