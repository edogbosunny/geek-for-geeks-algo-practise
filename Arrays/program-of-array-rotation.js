/**
 Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements. 
 [1,2,3,4,5,6,7]
 * 
 Rotation of the above array by 2 will make array
  [3,4,5,6,7,1,2]
 */

/**
 * steps to solve
 * get the length, and the index of the array.
 * split the required function o(n)
 * extract the array to be rotated
 * pop it to the end of the array.
 */

// Method 1

(arr, d, n)
let arrCopy;
let arrayRotation = function (arr, d, n) {
  arrCopy = arr;
  let splicedArr = arr.splice(0, d);
  console.log([...arr, ...splicedArr])
}

// arrayRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2, 5)

/* Function to left rotate arr of size n by d */
function leftRotate(arr, d, n) {
  for (i = 0; i < d; i++)
    leftRotatebyOne(arr, n);
}

function leftRotatebyOne(arr, n) {
  var i, temp;
  temp = arr[0];
  for (i = 0; i < n - 1; i++)
    arr[i] = arr[i + 1];
  arr[n - 1] = temp;
}

/* utility function to print an array */
function printArray(arr, n) {
  for (i = 0; i < n; i++)
  console.log(arr[i] + " ");
}

// Driver program to test above functions

var arr = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr, 2, 7);
printArray(arr, 7);
