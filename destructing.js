// destruct an array
let [a, b] = ["a", "b"];
console.log(a, b);

// omit element
let [,c] = ["_", "c"];
console.log(c);

// spread
let [first, ...tail] = [1, 2, 3, 4];
console.log(first, tail);

let map = new Map();
map.set("a", "1");
map.set("b", "2");

// for..of destructing
for (let [key, value] of map) {
  console.log(key, value);
}

// retrieve only values from map
for (let [,value] of map) {
  console.log(value);
}

// destruct object
let { foo: bar } = {  foo: "xyz" };
console.log(bar);

const log = (...args) => console.log(...args);
log(1, 2, 3);

let f = ([element], { key: value }) => console.log(element, value);
f([1], { key: 2 });

console.log([1, 2, 3].map(x => ({ key: x })));
