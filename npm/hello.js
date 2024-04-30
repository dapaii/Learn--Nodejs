import { sayHello, sum } from "npm-membuat-library-daffa";
import {max, min} from "npm-membuat-library-daffa/number"

console.info(sayHello("eko"))

const numbers = [10,10,10,10,10]
console.info(sum(numbers))

console.info(min(10, 20))
console.info(max(10, 20))