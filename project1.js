function countUp(star) {
    // Output the current value
    console.log(`Count: ${star}`);
  
    // Check if the value is greater than or equal to 10
    if (star >= 10) {
      return; // Return if the value is greater than or equal to 10
    } else {
      // Call the function with an incremented value
      countUp(star + 1);
    }
  }
  
  // Invoke the function with different start numbers
  countUp(5); // Starting from 5
  countUp(8); // Starting from 8
  countUp(12); // Starting from 12 (will not run as the start value is already greater than 10)
  