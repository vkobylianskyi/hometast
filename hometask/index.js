
const m = 3;

const fun = (x) => {
    return (1+x)**m
}

const getValue = () => {
    let xStart = 0;
    const xEnd = 1;
    const step = 0.01;
    const result = [];
    while (xStart <= xEnd) {
        result.push(fun(xStart));
        xStart += step;
    }
    return result
}

console.log(getValue())