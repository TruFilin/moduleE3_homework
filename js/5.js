const power = (x, n) => {
    if (n < 0) {
        console.log("Показатель степени n должен быть натуральным (0 или больше).");
        return;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};


const x = 2;
const n = 3;
const result = power(x, n);
console.log(`${x} в степени ${n} равно ${result}`); 