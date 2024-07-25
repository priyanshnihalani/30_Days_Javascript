// Activity 1

function evenodd(num){
    if(num % 2 == 0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }
}
evenodd(3)

function square(num){
    return num * num
}
console.log(square(3))

// Activity 2

let max = function(one, two){
    if(one > two){
        console.log('First Number is Greater')
    }
    else{
        console.log('Second Number is Greater')
    }
}
max(2, 4)

let concat_str = function(str1, str2){
    return str1 + str2
} 
console.log(concat_str("chai ", "aur code"))


// Activity 3

let sum = (a, b) => {
    return  a + b
}
console.log(sum(10, 20))

let check = (str, char) => {
    if(str.includes(char)){
        return true
    }
    else{
        return false
    }
}
console.log(check('hello', 'e'))

//  Activity 4

function product(num1, num2=3){
    return num1 * num2
}
console.log(product(2))

function greet(name, age=20){
    return `Congratulations! ${name}, It's your ${age}th birthday.`
}
console.log(greet('John'))

// Activity 5

function becomeCalled(){
    console.log("hi hitesh sir")
}
function caller(func, num){
    for(let i=1; i<=num; i++){
        func()
    }
}
caller(becomeCalled, 2)

function Boss(manager, servent, task){
    let halftask = manager(task)
    let otherhalftask = servent(halftask)
    return otherhalftask
}

function Manager(task){
    return `${task}`
}
function Servent(task){
    return `${task}`
}

console.log(Boss(Manager, Servent, "Complete All The Files"))