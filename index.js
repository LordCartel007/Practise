// For loop: counts from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

/*
   Parameters:
   - let i = 1         => Start at 1
   - i <= 5            => Run the loop while i is less than or equal to 5
   - i++               => Increase i by 1 each time the loop runs
  */

// While loop: counts from 1 to 5
let j = 1;

while (j <= 5) {
  console.log("While loop count:", j);
  j++; // Increment j to avoid an infinite loop
}

/*
 Parameters:
 - j = 1             => Start at 1
 - j <= 5            => Keep looping while j is less than or equal to 5
 - j++               => Increase j by 1 in each loop iteration
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // Multiples of both 3 and 5
  } else if (i % 3 === 0) {
    console.log("Fizz"); // Multiples of 3 only
  } else if (i % 5 === 0) {
    console.log("Buzz"); // Multiples of 5 only
  } else {
    console.log(i); // All other numbers
  }
}

for (let i = 10; i <= 10; i++) {
  console.log(i);
}
