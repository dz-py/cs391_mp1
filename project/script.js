function getInputs() {
    let input1 = document.getElementById("first-number").value;
    let input2 = document.getElementById("second-number").value;

    if (isNaN(input1) || isNaN(input2)) {
        updateOutput("Error: Invalid input");
        return null;
    }

    return {
        input1: Number(input1),
        input2: Number(input2),
    };
}

function updateOutput(value) {
    let output = document.getElementById("output");
    output.innerText = value;
    if (value < 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doAdd() {
    let { input1, input2 } = getInputs();
    let sum = input1 + input2;
    updateOutput(sum);
}

function doSubtract() {
    let { input1, input2 } = getInputs();
    let result = input1 - input2;
    updateOutput(result);
}

function doMultiply() {
    let { input1, input2 } = getInputs();
    let result = input1 * input2;
    updateOutput(result);
}

function doDivide() {
    let { input1, input2 } = getInputs();
    if (input2 === 0) {
        updateOutput("Error: Division by zero");
        return;
    }
    let result = input1 / input2;
    updateOutput(result);
}

function doPower() {
    let { input1, input2 } = getInputs();
    let result = 1;
    
    if (input2 < 0) {
        if (input1 === 0) {
            updateOutput("Error: 0 cannot have a negative exponent");
            return;
        }
        input2 = -input2; 
        for (let i = 0; i < input2; i++) {
            result *= input1;
        }
        result = 1 / result; 
    } else {
        for (let i = 0; i < input2; i++) {
            result *= input1;
        }
    }

    updateOutput(result);
}

function doClear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    updateOutput("");
}
