var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        return "world";
    });
}
//use any to be able to use any type
let lucky = 23;
const person = {
    first: "jeff",
    last: "delaney",
};
const person2 = {
    first: "usain",
    last: "bolt",
    fast: true,
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 10);
//use void for function that dont return a value
const add = (a, b) => {
    return a + b;
};
add(3, 7);
const arr = [];
arr.push(1);
arr.push(4);
arr.push(12);
//Generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z;
export {};
