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

// const twoDimensionalSum = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];

//     for (let j = 0; j < subArr.length; j++) {
//       sum += subArr[j];
//     }
//   }
//   return sum;
// };

/*
1. Intialize product variable at 1
2. Iterate through arr in outer loop start index at 0 - less than arr length
3. Intialize subArr variable with arr[i] elements as value
4. Iterate through subArr in inner loop starting j index at 0 - less than subArr length
5. Increment product total by multiplying each subArr[j] element
6. Return product total
*/

// const twoDimensionalProduct = arr => {
//   let product = 1;

//   for (let i = 0; i < arr.length; i++){
//     let subArr = arr[i];

//     for (let j = 0; j < subArr.length; j++) {
//       product *= subArr[j];
//     }
//   }
//   return product;
// };


// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88


/*
1. largestNum variable set to 0
2. Iterate through matrix starting: i index 0 - less than matrix length
3. SubMatrix variable assigned matrix[i] elements
4. Iterate through subAmatrix: j index 0 - less than subMatrix length
5. Nums variable assigned subMatirx[j] elements
6. If num is greater than largestNum, set largestNum to num
7. Return largestNum
*/

// const maxInMatrix = (matrix) => {
//   let largestNum = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     let subMatrix = matrix[i];

//     for (let j = 0; j < subMatrix.length; j++) {
//       let num = subMatrix[j];

//       if (num > largestNum) {
//         largestNum = num;
//       }
//     }
//   }
//   return largestNum;
// };

// let matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56]
// ];

// console.log(maxInMatrix(matrix)); // 72
