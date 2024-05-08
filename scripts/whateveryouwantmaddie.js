// Forloops
console.log("Task #1");
for (let i = 0; i <= 10; i++) {
    console.log(i*i);
}
console.log("Task #2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");

console.log("Task #3");
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

console.log("Task #4");
let sumNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumNumbers = sumNumbers + i; 
}
console.log(sumNumbers);

console.log("Task #5");
let numbersFactorial = 1;
for (let i = 1; i <= 10; i++) {
    numbersFactorial= numbersFactorial * i
    console.log(numbersFactorial);
}
// Arrays
console.log("Task #6");
let arr = [3, 1, 4, 1, 5];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("Task #7");
for (let i = 1; i < arr.length; i++) {
    console.log(arr.at[-1*i-1]);
}

console.log("Task #8");
let cubes = [];
for (let i = 0; i < 10; i++) {
    cubes.push(i*i*i);
}
console.log(cubes);

console.log("Task #9");
let nacci = [0, 1];
for (let i = 0; i < 10; i++) {
    nacci.push(nacci.at(-1) + nacci.at(-2));
}
console.log(nacci);

console.log("Task #10");
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    newarr.push.at(arr.pop(-1*i-1))
}
console.log(arr);
