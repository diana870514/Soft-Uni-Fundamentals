function helloEveryone() {
    let me = {
        name: "Petar",
        age: 27,
        hobbies: ["running", "hiking", "fitness"],
        town: "Sofia",
    }
    let empty = "";
    for(i=1; i<=10; i++) {
        empty += i;
    }
    console.log(empty);
}

helloEveryone()