function hasTargetSum(array, target) {
  // Write your algorithm here
  const newSet = new Set();

  for (let num of array) {
    const num2 = target - num;

    if (newSet.has(num2)) {
      return true;
    }

    newSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  for loop is a liner copmlexitiy so it will be O(n)

  inside the loop we have two methods set.has()--->O(1) same as  add()--->O(1)
  so overall it will be O(n)


*/

/* 
  Add your pseudocode here
 create hasTargetSum function
      create empty set called newSet

    for each element (num) in the array
        calculate num2 = target - num

        if num2 is in newSet
            return true
        add num to newSet

    end for loop

    return false 

  end the function   

*/

/*
  Add written explanation of your solution here

  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 2, 50, 11, 9], 59));

  console.log(""); console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 0, 15, 3, 2], 2));

  console.log("");
//////////////////////////////////////////////////////
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
