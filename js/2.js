function isPrimeNumber(num) {
    if (num > 1000) {
        console.log("Данные неверны. Число не должно превышать 1000.");
        return;
    }

    if (num < 2) {
        console.log(`${num} не является простым числом.`);
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} является простым числом.`);
    } else {
        console.log(`${num} не является простым числом.`);
    }
}


isPrimeNumber(29);
isPrimeNumber(1001);
isPrimeNumber(1);
