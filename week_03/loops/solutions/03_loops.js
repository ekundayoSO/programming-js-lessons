// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.



  while (true) {
    let km = Number(prompt("Enter kilometers"));
  
    if (km === 0) {
      console.log("Program terminated.");
      break;
    }
  
    let hr = Number(prompt("Enter hours"));
  
    if (km !== 0) {
      let averageSpeed = (km / hr).toFixed(1);
      console.log(`Average speed: ${averageSpeed} km/h`);
    } else {
      console.log("Invalid input.");
    }
  }
  
