// Activity 1
let personname  = "Hitesh"
let personage = "20"

console.log(`The name of the youtuber is ${personname} and his age is ${personage}.`)


let multistr = `Hello My name is Priyansh Nihalani, 
I am Fronted Dev, learnt javascript and react.js from chaiaurcode`

console.log(multistr)

// Activity 2

let arr = [1,2,3,4,5,6,7];
let [a, b] = arr
console.log(a, ",", b)

const books = {
    title: 'The Man who sold his Ferrari',
    author: 'Robin Sharma',
    year: '1999'
}

let {title, author} = books
console.log(title,',',author)

// Activity 3

let spreadarr = [...arr, 8, 9, 10]
console.log(spreadarr)

function sumargs(...args){
    return args.reduce((prev, next) => {
        return prev + next
    }, 0)
}
console.log(sumargs(1,2,3,4,5))

// Activity 4

function product(a, b=4){
    return a * b
}
console.log(product(10))
console.log(product(2, 3))

// Activity 5

let a1 = 23;
let b1 = 12;
let c1 = () => {
    console.log("Hello Hitesh Sir")
}

let obj1 = {a1, b1, c1}
console.log(obj1)

let channel = "channel"
let youtubeChannel = {
    youtuber: "Hitesh Choudhary",
    [channel]: "chaiaurcode"
}

console.log(youtubeChannel)