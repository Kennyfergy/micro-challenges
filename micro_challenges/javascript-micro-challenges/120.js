/*# Array Checkpoint

Create a function that takes in an array. Add up the first and last values in the array.

## Examples:

### Example 1

```
console.log(yourFunction([1, 2, 3, 4, 5]));
```

should log 

```
6
```

### Example 2

```
console.log(yourFunction([6, 7, 8, 9, 10, 11, 12]));
```

should log


```
18
```*/
console.log("JS");

function firstLastAdd(array) {
  const firstNumber = array[0];
  const lastNumber = array[array.length - 1];
  const sum = firstNumber + lastNumber;
  return sum;
} // end firstLastAdd

console.log("Expect 6:", firstLastAdd([1, 2, 3, 4, 5]));
console.log("Expect 18:", firstLastAdd([6, 7, 8, 9, 10, 11, 12]));
