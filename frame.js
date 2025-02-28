let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText == '=') {
            try {
                string = evaluateExpression(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText == 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (buttonText == '√') {
            try {
                string = Math.sqrt(evaluateExpression(string)).toString();
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});

function evaluateExpression(expr) {
    // Replace the percentage symbol with division by 100
    expr = expr.replace(/%/g, '/100');
    // Use Function constructor to safely evaluate the expression
    return new Function('return ' + expr)();
}