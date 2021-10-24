import { inventors } from "../../data.js";

function writeFullnames(data) {
    return data.map((inventor) => {
        return `${inventor.first} ${inventor.last}`;
    });
}

export const inventorsFullnames = writeFullnames(inventors);