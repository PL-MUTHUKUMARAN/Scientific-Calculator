let mode = document.getElementById("mode");
const display = document.getElementById("display");

function appendvalue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (mode.value == "degree") {
            expression = expression.replace(/sin\(/g, 'sin(');
            expression = expression.replace(/cos\(/g, 'cos(');
            expression = expression.replace(/tan\(/g, 'tan(');
            expression = expression.replace(/sin⁻¹\(/g, 'asin(');
            expression = expression.replace(/cos⁻¹\(/g, 'acos(');
            expression = expression.replace(/tan⁻¹\(/g, 'atan(');
        } else {
            expression = expression.replace(/sin\(/g, 'Math.sin(');
            expression = expression.replace(/cos\(/g, 'Math.cos(');
            expression = expression.replace(/tan\(/g, 'Math.tan(');
            expression = expression.replace(/sin⁻¹\(/g, 'Math.asin(');
            expression = expression.replace(/cos⁻¹\(/g, 'Math.acos(');
            expression = expression.replace(/tan⁻¹\(/g, 'Math.atan(');
        }

        expression = expression.replace(/ln\(/g, 'ln(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/x/g, '*');
        expression = expression.replace(/√\(/g, 'Math.sqrt(');
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/e/g, 'Math.E');

        result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "ERROR";
    }
}

function sin(degree) {
    return Math.sin(degree * Math.PI / 180);
}

function cos(degree) {
    return Math.cos(degree * Math.PI / 180);
}

function tan(degree) {
    return Math.tan(degree * Math.PI / 180);
}

function asin(value) {
    return Math.asin(value) * 180 / Math.PI;
}

function acos(value) {
    return Math.acos(value) * 180 / Math.PI;
}

function atan(value) {
    return Math.atan(value) * 180 / Math.PI;
}

function ln(value) {
    return Math.log(value);
}
