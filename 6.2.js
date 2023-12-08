// Step 1: Create an array of descriptive words.
let descriptiveWords = ['awesome', 'creative', 'dynamic', 'energetic', 'fantastic'];

// Step 2: Create a function that contains a prompt asking the user for a name.
function generateUsername() {
  // Prompt the user for a name.
  let userName = prompt("Please enter your name:");

  // Step 3: Select a random value from the array using Math.random.
  let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
  let randomWord = descriptiveWords[randomIndex];

  // Step 4: Output into the console the prompt value and the randomly selected array value.
  console.log(`Hello, ${userName}! Your username could be: ${userName}${randomWord}`);
}

// Step 5: Invoke the function.
generateUsername();
