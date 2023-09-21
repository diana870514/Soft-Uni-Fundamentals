function solve(animal, food) {

    let animalFirst = '';
    let animalLast = '';
    let foodFirst = '';
    let foodLast = '';

    for (let i = 0; i < animal.length; i++) {
        animalFirst = animal[0];
        if (i === animal.length - 1) {
            animalLast = animal[i];
        }
    }

    for (let n = 0; n < food.length; n++) {
        foodFirst = food[0];
        if (n === food.length - 1) {
            foodLast = food[n];
        }
    }

    if (animalFirst === foodFirst && animalLast === foodLast) {
        console.log('true');
    } else {
        console.log('false');
    }

}

solve('chickadee', 'chocolate_cake');