function findBiggest(myNumbers){
  // var to store largest number
  biggestNumber = 0;

  // iterate over array, ensure we do not pass index
  for(i = 0; i < myNumbers.length; i++){
    // test current value against existing biggest num
    // if current value is larger, value is assigned to biggestNum
    if (biggestNumber < myNumbers[i]){
      biggestNumber = myNumbers[i];
    }
  }
  // display output
  console.log("The biggest number of " + myNumbers + " is: " biggestNumber);
 }

// Create var for array, run 4 different arrays to test
test1Numbers = [8, 10, 2, 9, 99, 1, 12, 345, 899, 0];
// test2Numbers = [78, 10, 0, 9, 1];
// test3Numbers = [0, 99, 2, 1000, 1];
// test4Numbers = [1, 12, 345, 899, 0];

// run 4 different arrays to test
// make function call
findBiggest(test1Numbers);
// findBiggest(test2Numbers);
// findBiggest(test3Numbers);
// findBiggest(test4Numbers);
