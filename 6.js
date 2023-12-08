function factorial(n) {
   
    if (n === 0) {
      return 1; 
    } else {
      console.log(`Calculating factorial(${n})...`);
      return n * factorial(n - 1);
    }
  }
  const result = factorial(5); 
  console.log(`Factorial result: ${result}`);
  