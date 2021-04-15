const fun = (x, m) => {
  return (1 + x) ** m;
};

const getValue = (xStart, xEnd, m) => {
  const step = 0.01;
  const result = [];
  while (xStart <= xEnd) {
    result.push(fun(xStart, m));
    xStart += step;
  }
  return result;
};

module.exports = getValue;
