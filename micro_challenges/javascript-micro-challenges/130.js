console.log("JS");
/*# Object Checkpoint

Create a function that takes in an object with two keys, your name and an array of numbers. 
Firstly, log your name to the console,
 then loop over and sum the numbers in the array and log that to the console as well.

## Examples:

### Example 1

```
console.log(yourFunction({ name: "Mason", numbers: [1, 2, 3, 4, 5] }));
```

should log 

```
Mason
15
```

### Example 2

```
console.log(yourFunction({ name: "Blaine", numbers: [6, 7, 8, 9, 10, 11, 12] }));
```

should log


```
Blaine
63
```*/

function twoKey(obj) {
  console.log(obj.name);

  let sum = 0;
  for (let i = 0; i < obj.numbers.length; i++) {
    sum += obj.numbers[i];
  }

  console.log(sum);
}
console.log(twoKey({ name: "Mason", numbers: [1, 2, 3, 4, 5] }));
console.log(twoKey({ name: "Blaine", numbers: [6, 7, 8, 9, 10, 11, 12] }));
