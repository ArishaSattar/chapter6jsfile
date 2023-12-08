
let value = '1000';


(function () {
  let value = 'IIFE Function';
  console.log('Inside IIFE:', value);
})();

let result = (function () {
  let value = 'IIFE Expression';
  console.log('Inside IIFE Expression:', value);
  return value;
})();

console.log('Result from IIFE Expression:', result);

(function (newValue) {
  let value = newValue;
  console.log('Inside Anonymous Function:', value);
})('Anonymous Function Value');
