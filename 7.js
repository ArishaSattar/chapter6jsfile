
let start = 10;


function countdown(value) {
  
  console.log(`Countdown: ${value}`);
  if (value < 1) {
    return;
  } else {
    
    countdown(value - 1);

  
    if (value > 0) {
     
      return countdown(value - 1);
    }
  }
}


countdown(start);