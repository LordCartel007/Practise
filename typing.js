//Loop count

for (let i = 0; i < 5; ++i) {
  console.log("adding of " + i);
}

let j = 1;

while (j <= 10) {
  ++j;
  console.log("adding in while loop " + j);
}

for (let i = 0; i <= 100; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}

const adding = (pen, ball) => {
  return pen + ball;
};

console.log("adding function " + adding(2, 4));

function reverse(String) {
  return String.split("").reverse().join("");
}

console.log(reverse("doG fo ecneserp eht ma I"));

const isPalindrome = (string) => {
  const Reversed = string.split("").reverse().join("");
  return string === Reversed;
};

console.log(isPalindrome("house"));

const maxNumber = (number) => {
  return Math.max(...number);
};

console.log(maxNumber([1, 9, 30, 2, 23, 40, 45, 22]));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 9, 9, 9, 3, 2, 1, 2]));
