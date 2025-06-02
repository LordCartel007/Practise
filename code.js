// for (let i = 40; i >= 3; i -= 2) {
//   console.log(i);
// }

j = 30;

while (j > 5) {
  console.log((j -= 5));
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + "fizzbuzz");
  } else if (i % 3 == 0) {
    console.log(i + "fizz");
  } else if (i % 5 == 0) {
    console.log(i + "Buzz");
  } else {
    console.log(i);
  }
}
