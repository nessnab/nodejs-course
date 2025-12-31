//global object

console.log(global);

setTimeout(() => {
    console.log('Hello from setTimeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('Hello from setInterval');
}, 1000);

console.log(__dirname);
console.log(__filename);