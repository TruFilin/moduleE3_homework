function printNumbers(start, end) {
    if (start > end) {
        console.log("Начальное число должно быть меньше или равно конечному.");
        return;
    }

    let current = start;

    const intervalId = setInterval(() => {
        console.log(current);
        current++;


        if (current > end) {
            clearInterval(intervalId);
        }
    }, 1000);
}

printNumbers(5, 15);
