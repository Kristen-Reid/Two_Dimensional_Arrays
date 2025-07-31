/*
1. Initialize sum variable set to 0
2. Iterate through outer loop start index (i) at 0 to less than arr length
   - each element at arr[i] is a subArr
3. Initialize subArr variable with the value of elements at arr[i]
   - subArr = array[elements]
4. Iterate through subArr in inner loop starting index j at 0 through length of subArr
   - Iterating through subArr gives access to number elements within two dimensional array
5. Add up subArr[j] numbers to sum variable through each iteration of sub arrays
6. Return sum
*/

const twoDimensionalSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];

    for (let j = 0; j < subArr.length; j++) {
      sum += subArr[j];
    }
  }
  return sum;
};
