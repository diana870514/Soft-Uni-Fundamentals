function merge() {
// First method

    let person = {
        firstName: `Ivan\n`,
        secondName: `Petrov\n`,
        thirdName: `Ivanov\n`,
    } ;

    let moreInfo = {
        age: `25\n`,
        city: `Sofia\n`,
        country: `Bulgaria`
    };

    // let isComplete = {
    //     person,
    //     moreInfo
    // };
        
    // console.log(isComplete)

    //Second method:
    let Combined = Object.assign(person, moreInfo);
    console.log(Combined)

}

merge()