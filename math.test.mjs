import { sum, subtract } from "./math.mjs";

let result, expected;

result = sum(3, 7);
expected = 10;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`);
}
