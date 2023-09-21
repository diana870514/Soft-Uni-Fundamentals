function positiveNumCheck(num) {
    let isPositive = false;

    if(num > 0) {
        isPositive = true;
        console.log(isPositive);
    } else if (num < 0) {
        console.log(isPositive);
    }

}

positiveNumCheck(12)
positiveNumCheck(-2)