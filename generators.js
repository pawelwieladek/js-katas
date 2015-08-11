function* range(start, stop) {
  for (let i = start; i < stop; i++)
    yield i;
}

// for..of loop
for (let i of range(3, 7)) {
  console.log(i);
}

// spread
let array = [...range(4, 9)];
console.log(array);

// call next few times
var until3 = range(0, 3);
console.log(until3.next());
console.log(until3.next());
console.log(until3.next());
console.log(until3.next());
