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


/*
1. largestNum variable set to 0
2. columns empty array
3. Iterate through less than matrix length from i index 0
4. subMatrix variable set to matrix elements
5. Iterate through less than subMatrix length from j index 0
6. num variable set to matrix row(j) and matrix column (i): matrix[j][i]
   - Setting row[j] and column[i] keeps you in one column at a time and iterating through each row
     For ex: while the outer loop is still in its loop at the 0 index the inner loop runs through
     the column row by row through all of its loops (r[0]c[0], r[1]c[0], r[2]c[0]...)
7. If num is great than largestNum:
   - Splice smaller num from columns array
   - Set largestNum from smaller num to larger num
   - Push largestNum into columns array
10. Return columns array
*/

// const maxColumn = matrix => {
//   let largestNum = 0;
//   let columns = [];

//   for (let i = 0; i < matrix.length; i++) {
//     let subMatrix = matrix[i];
//     for (let j = 0; j < subMatrix.length; j++){

//       let num = matrix[j][i];

//       if (num > largestNum) {
//         columns.splice(i,1);
//         largestNum = num;
//         columns.push(largestNum);
//       }
//     }
//   }
//   return columns;
// };

// let matrix = [
//               [5, 9, 21],
//               [9, 19, 6],
//               [12,14,15]
// ];
// console.log(maxColumn(matrix)); // [12, 19, 21]


/*
1. twoArr empty array variable
2. Iterate through arr1 starting i at 0 stopping iteration less than arr1's length
3. Iterate through arr2 starting j at i stopping iteration less than arr2's length
4. subArr empty array variable
5. If i = j, push arr[i] and arr[j] into subArr
6. Push subArr into twoArr
7. Return twoArr
*/

// const zip = (arr1, arr2) => {
//   let twoArr = [];

//   for (let i = 0; i < arr1.length; i++){
//     for (let j = i; j < arr2.length; j++){

//       let subArr = [];

//       if (i === j) {
//         subArr.push(arr1[i], arr2[j]);
//         twoArr.push(subArr);
//       }
//     }
//   }
//   return twoArr;
// };

// console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

// console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// // [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

// console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]


/*
1. zanyZapped empty array variable
2. If arr1 length is greater than arr2 length:
   - Set arr2 to arr1's length
   - Else set arr1's length to arr2
3. Iterate through arr1 starting i at 0 index and stopping at arr1 length or arr2 length
4. Iterate through arr2 starting j at 0 index and stopping at arr2 length or arr1 length
** 5. If j and i index are the same push [arr1[i], arr2[j]] into zanyZapped array
** 6. If arr1[i] or arr2[j] equals undefined set them to null
7. Return zanyZapped array
*/

// const zanyZip = (arr1, arr2) => {
//   let zanyZapped = [];

  // if (arr1.length > arr2.length) {
  //   arr2.length = arr1.length;
  // } else {
  //   arr1.length = arr2.length;
  // }

//   for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//     for (let j = 0; j < arr2.length || j < arr1.length; j++) {

//       if (i === j) {
//         zanyZapped.push([arr1[i], arr2[j]]);
//       }

//       if (arr1[i] === undefined || arr2[j] === undefined) {
//         arr1[i] = null;
//         arr2[j] = null;
//       }
//     }
//   }
//   return zanyZapped;
// };

// console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]


/*
1. Initialize empty matrixArr varibale
2. Iterate through matrix1 starting i at 0 index - less than length
3. Initialize subMatrix varibale set to matrix1[i] (matrix1[row])
4. Initialize empty arr varibale
5. Iterate through subMatrix starting j at 0 - less than length
   ** subMatrix[j] = matrix1[row][col]; can be used to get matrix2[row][col]
      value as well
6. Initialize sum variable: sum = matrix1[i][j] + matrix2[i][j]
   ** matrix1[row][col] + matrix2[row][col] **
7. Push sum into arr from inner loop
8. Push arr into matrixArr matrix array from outer loop
9. Return matrixArr
*/


// const matrixAddition = (matrix1, matrix2) => {
//   let matrixArr = [];

//   for (let i = 0; i < matrix1.length; i++) {
//     let subMatrix = matrix1[i];
//     let arr = [];

//     for (let j = 0; j < subMatrix.length; j++) {
//       let sum = matrix1[i][j] + matrix2[i][j];
//       arr.push(sum);
//     }
//     matrixArr.push(arr);
//   }
//   return matrixArr;
// };

// let matrixA = [[2,5], [4,7]]
// let matrixB = [[9,1], [3,0]]
// let matrixC = [[-1,0], [0,-1]]
// let matrixD = [[2, -5], [7, 10], [0, 1]]
// let matrixE = [[0 , 0], [12, 4], [6,  3]]

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]


/*
1. Empty array varibale luckyMatrix
2. Iterate through matrix starting row at 0 index - less than length
3. Declare variables min and max set to 0
4. subMatrix variable for index vales of matrix
5. Iterate through subMatrix starting col at 0 index - less than length
6. Use tenary to find min val for row (matrix[row][col])and max val for col (matrix[col][row])
   - min will equal if val is the min num in that row
   - max will equal if val is the max num in that col
   - min and max have to be the same index
7. If min num equals max num push the value into luckyMatrix array (outer loop)
8. Return luckyMatrix
*/

const luckyNumbers = (matrix) => {
  let luckyMatrix = [];

  for (let row = 0; row < matrix.length; row++) {
    let min = 0;
    let max = 0;
    let subMatrix = matrix[row];

    for (let col = 0; col < subMatrix.length; col++) {
      console.log(matrix[row][col]);
      // console.log(matrix[col][row]);

      min = min < matrix[row][col] ? min = matrix[row][col] : min;
      console.log(min);
      // max = matrix[col][row] > max ? max = matrix[col][row] : max;
      // console.log(max)
    }
    // if (min === max) luckyMatrix[max];
  }
  return luckyMatrix;
};

let matrix1 = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15]
];

console.log(luckyNumbers(matrix1)); // [12]

// let matrix2 = [
//   [5, 10, 8, 6],
//   [10, 2, 7, 9],
//   [21, 15, 19, 10]
// ];

// console.log(luckyNumbers(matrix2)); // [10]
