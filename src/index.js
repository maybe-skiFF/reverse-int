module.exports = function reverse (n) {
  let numToStr = String(Math.abs(n));
  let res = '';

  for (let i = 0; i < numToStr.length; i++) {
    res = `${numToStr[i]}${res}`;
  }
  return +res;
}
