import { inventors } from "../../data.js";

function filterInvestorsBorn1500s(data) {
    return data.filter(
        (inventor) => inventor.year > 1499 && inventor.year < 1600
    );
}

export const inventorsBorn1500s = filterInvestorsBorn1500s(inventors)