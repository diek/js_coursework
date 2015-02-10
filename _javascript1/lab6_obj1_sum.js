function sumArray(){
  // Create var for array, and var to calculate and store sum
  myNumbers = [8, 10, 2, 9, 1];
  sumNumbers = 0;

  //iterate over array, ensure we do not pass index
  for(i = 0; i < myNumbers.length; i++){
    // add current value to sum
    sumNumbers += myNumbers[i];
  }
  // display output
  console.log(sumNumbers);
 }
//make function call
sumArray();
