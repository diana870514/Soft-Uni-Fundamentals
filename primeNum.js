function prime(a) {
    if (a <= 1) {
        console.log(`not prime`);
    }  else {

            if (a % 2 == 0) {
                console.log(`not prime`);
            } else if (a % 2 != 0) {
                console.log(`prime`)
            }
    }
}

prime(36)