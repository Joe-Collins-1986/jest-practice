
function addition(num1, num2, ...rest) {
    total = num1 + num2;
    for (let num of rest) {
        total += num
        };

    if (Number.isInteger(total)) {
        return total

    } else if ((typeof total) == "string") {
        return "Only enter numbers"

    } else if (num1 == null || num2 == null) {
        return "You must enter at least 2 inputs"

    } else {
        return "Invalid input"
    }
}

module.exports = addition;