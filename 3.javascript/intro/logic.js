let x = 4;
let y = 6;
let z = 7;

let c = x >= y; // ( x > y )
let d = y <= z; // ( y < z )
let e = z == x;
let f = 5 == '5';
let g = 5 === '5';
let h = 5 !== '5';
let i = name == text;
let j = !g;
let k = c && e; // AND
let l = c || e; // OR

console.log({ c, d, e, f, g, h, i, j, k, l });
