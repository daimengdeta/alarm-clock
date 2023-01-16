function num(a) {
  let c = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a; j++) {
      // c[i - 1] = i;
      c.push(i);
    }
    console.log(c.slice((i - 1) * a, i * a), '===========打印的 ------ f');
  }

  return c;
}
console.log(num(4), '===========打印的 ------ 1');

// if(let i=0){}
function nums(d) {
  let e = [];
  for (let i = 1; i <= d * d; i++) {
    e.push(i);
  }
  for (let g = 0; g < d; g++) {
    let f = e.slice(g * d, (g + 1) * d);
    if (g % 2 === 0) {
      console.log(f, '===========打印的 ------ g');
    } else {
      console.log(
        f.sort((a, b) => b - a),
        '===========打印的 ------ g2',
      );
    }
  }
  return e;
}
console.log(nums(4), '===========打印的 ------ ');
