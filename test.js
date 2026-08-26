import regexGen from './regex-gen.js';
let r = String.raw;

// chunk an array into subarrays of length n
let chunk = (a, n) =>
  Array.from({length: Math.ceil(a.length / n)}, (_, i) =>
    a.slice(i * n, i * n + n),
  );
let range = (start, end) =>
  Array.from({length: end - start + 1}, (_, i) => start + i);

// convert an array of code points to a regex character class
console.log(
  chunk(
    range(0x0, 0x10ffff).map(cp => cp.toString(3)),
    0x1000,
  )
    .map(x => regexGen(x).source)
    .join('|'),
);
