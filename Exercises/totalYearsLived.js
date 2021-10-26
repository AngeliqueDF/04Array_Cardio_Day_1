import { inventors } from "./../data.js";

function calculateTotalYearsLived(data) {
    const yearsLived = data.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.passed - currentValue.year);
    }, 0);

    return yearsLived
}

export const totalYearsLived = calculateTotalYearsLived(inventors)