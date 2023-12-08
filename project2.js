// Arrow functions
const functionOne = () => console.log("One");
const functionTwo = () => console.log("Two");
const functionThree = () => console.log("Three");
const functionFour = () => {
  console.log("Four");
  setTimeout(functionOne, 0);
  setTimeout(functionThree, 0);
};

// Invoke the functions
functionFour();
