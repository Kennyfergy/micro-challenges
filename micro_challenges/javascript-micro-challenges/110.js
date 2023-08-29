/*# Conditional Checkpoint
Create a function that takes two numbers.

If the first number is bigger than the second number, return `"The first number was bigger!"`.
If the second number is bigger than the first number, return `"The second number was bigger!"`.
If the numbers are the same, return `"The numbers are the same!"`.

## Examples:

### Example 1

```
console.log(yourFunction(3, 2));
```

should log 

```
The first number was bigger!
```

### Example 3

```
console.log(yourFunction(2, 7));
```

should log


```
The second number was bigger!
```

### Example 2

```
console.log(yourFunction(7, 7));
```

should log


```
The numbers are the same!
```*/

console.log("JS");

function numberCompare(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    // checking if first number is bigger
    return "The first number was bigger";
  } else if (numberOne < numberTwo) {
    // checking if second number is bigger
    return "The second number was bigger!";
  } else if (numberOne === numberTwo) {
    //checking if numbers are equal
    return "The numbers are the same!";
  }
} // end numberCompare
console.log("Expect first number bigger:", numberCompare(3, 2));
console.log("Expect numbers are the same:", numberCompare(7, 7));
console.log("Expect the second number bigger:", numberCompare(2, 7));
