var mySqrt1 = function (x) {
  if (x < 2) return x;

  for (let i = 2; i < x; i++) {
    if (i * i === x) return i;

    if (i * i > x) return i - 1;
  }
};
//=======================================================
var mySqrt2 = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqrt = mid * mid;

    if (sqrt === x) return mid;

    if (sqrt < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(mySqrt1(8));
