import { inventors } from "../../data.js";

function writeFullnames(data) {
    const mapped = data.map((inventor) => {
        return `${inventor.first} ${inventor.last}`;
    });
    return mapped
}

export const inventorsFullnames = writeFullnames(inventors);