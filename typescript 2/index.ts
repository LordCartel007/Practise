import * as _ from "lodash";

async function hello() {
  return "world";
}

//use any to be able to use any type
let lucky: any = 23;

type Style = "bold" | "italic" | 23;

interface Person {
  first: string;
  last: string;
  // using any to add any extra name and properties
  [key: string]: any;
}
//person
const person: Person = {
  first: "jeff",
  last: "delaney",
};

const person2: Person = {
  first: "usain",
  last: "bolt",
  fast: true,
};

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(5, 10);

//use void for function that dont return a value

const add = (a: number, b: number) => {
  return a + b;
};

add(3, 7);

//Writing arrays

type MyList = [number?, string?, boolean?];

const arr: MyList = [];

arr.push(1);
arr.push(4);
arr.push(12);

//Generics
class Observable<T> {
  constructor(public value: T) {}
}
let x: Observable<number>;

let y: Observable<Person>;

let z: Observable<23>;
