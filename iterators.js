class RangeIterator {
  constructor(begin, end) {
    this.value = begin;
    this.end = end;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    return this.value < this.end ? { value: this.value++, done: false } : { done: true };
  }
}

let range = (begin, end) => new RangeIterator(begin, end);

// for..of loop
for (let i of range(3, 7)) {
  console.log(i);
}

// spread
let array = [...range(4, 9)];
console.log(array);
