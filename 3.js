// Step 1: Set up two variables containing number values.
let num1 = 10;
let num2 = 5;

// Step 2: Set up a variable to hold an operator, either + or -.
let operator = '+';

// Step 3: Create a function that retrieves the two values and the operator string value within its parameters.
// Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly.
function performOperation(value1, value2, operator) {
  if (operator === '+') {
    return value1 + value2;
  } else if (operator === '-') {
    return value1 - value2;
  } else {
    // Default to addition if not presented with a valid operator.
    console.warn("Invalid operator. Defaulting to addition.");
    return value1 + value2;
  }
}

// Step 4: Within console.log(), call the function using your variables and output the response to the console.
console.log(`Result 1: ${num1} ${operator} ${num2} = ${performOperation(num1, num2, operator)}`);

// Step 5: Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.
operator = '-';

console.log(`Result 2: ${num1} ${operator} ${num2} = ${performOperation(num1, num2, operator)}`);
