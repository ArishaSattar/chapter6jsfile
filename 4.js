
let resultArray = [];
for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;

  
  function calculateSum(param1, param2) {
    return param1 + param2;
  }

  let response = calculateSum(value1, value2);

 
  resultArray.push(response);
}

console.log(resultArray);

