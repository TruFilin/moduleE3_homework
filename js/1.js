function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let item of arr) {
        if (typeof item === 'number') {
            if (item === 0) {
                zeroCount++;
            } else if (item % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Количество четных элементов: ${evenCount}`);
    console.log(`Количество нечетных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
}


const array = [1, 2, 0, 3, 4, null, 'text', 6, 7, 0, 8];
countEvenOdd(array);
