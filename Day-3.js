// Activity 1

const num = 16
if (num > 0) {
    console.log("Number is positive")
}
else if (num < 0) {
    console.log("Number is negative")
}
else {
    console.log("Number is zero")
}

const age = 17
if (age >= 18) {
    console.log("The Person is Eligible To Vote")
}
else {
    console.log("The Person is not Eligible To Vote")
}

// Activity 2

const a = 17
const b = 18
const c = 20

if (a > b) {
    if (a > c) {
        console.log("A is Greater")
    }
    else {
        console.log("C is Greater")
    }

}
else {
    if (b > c) {
        console.log("B is Greater")
    }
    else {
        console.log("C is Greater")
    }
}

// Activity 3

let DayofWeek = 7;

switch (DayofWeek) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("No such days like this")
}


let marks = 90

switch (true) {
    case marks >= 80:
        console.log("A grade")
        break;
    case marks >= 65:
        console.log("B grade")
        break;
    case marks >= 50:
        console.log("C grade")
        break;
    case marks >= 35:
        console.log("D grade")
        break;
    default:
        console.log("You are Failed")
}

// Activity 4

let number = 16

const result = number % 2 == 0 ? "The Number is Even" : "The Number is Odd"
console.log(result)

//Activity 5

let year = 2024

if( year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("The year is leap year");
        } 
        else{
            console.log("The year is not leap year")
        }
    }
    else{
        console.log("The year is leap year")
    }
}
else{
     console.log("The year is not leap year")
}