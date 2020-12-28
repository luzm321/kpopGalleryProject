console.log("hi from the project");

// function addIt() {
//     console.log("Hello im supposed to something");
// }

// addIt();

function multiplyIt(number1, number2) {
    
    if(isNaN(number1) === false && isNaN(number2) === false) {
        console.log(number1, number2);
        return number1 * number2;    
    } else { 
        console.log("Your parameter is not a number");
    };

}

let person1 = {
"name": "Gabriel",
"age": "28",
"gender": "Male",
"ethnicity": "Mexican",
"citizenship": "U.S.A",
"favoritePokemon": [
    "Aggron",
    "Sableye",
    "Mewtwo",
    "Pikachu"
],
"favoriteFood": [
    "Chiken Tikka Masala",
    "Tacos",
    "Chile Relleno",
    "Chicken Wings",
    "Pizza"
]
};

let person2 = {
"name": "Luz",
"age": "27",
"gender": "Female",
"ethnicity": "Filipino",
"citizenship": "U.S.A",
"favoritePokemon": [
"Snorlax",
"Pancham",
"Piplup",
"Lunala"
],
"favoriteFood": [
"Bibimbap",
"Sisig",
"Bulgogi",
"Chicken Tinola",
"Corned Beef"
]
};

let person3 = {
    "name": "Michael",
    "age": "28",
    "gender": "Male",
    "ethnicity": "Filipino",
    "citizenship": "U.S.A",
    "favoritePokemon": [
        "Aggron",
        "Sableye",
        "Mewtwo",
        "Pikachu"
    ],
    "favoriteFood": [
        "Chiken Tikka Masala",
        "Tacos",
        "Chile Relleno",
        "Chicken Wings",
        "Pizza"
    ]
};

    let person4 = {
        "name": "Basha",
        "age": "27",
        "gender": "Female",
        "ethnicity": "Mexican",
        "citizenship": "U.S.A",
        "favoritePokemon": [
        "Snorlax",
        "Pancham",
        "Piplup",
        "Lunala"
        ],
        "favoriteFood": [
        "Bibimbap",
        "Sisig",
        "Bulgogi",
        "Chicken Tinola",
        "Corned Beef"
        ]
    };

// Chicken Monkey
    for (i; i <= 100; i++) {
        // whatever number that the remainder is 0 from dividing it from 5 or 7
        if (i % 5 === 0 && i % 7 === 0) {
        console.log(`${i} chicken monkey`);    
    } else if (i % 7 === 0) {
        console.log(`${i} monkey`);
    } else if (i % 5 === 0) {
        console.log(`${i} chicken`);
    } else {
        console.log(`${i}`);
    }
    }

    // adding a new key and value to the object
    Object.assign(person2, {"music": "kpop"});