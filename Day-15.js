// Activity 1

function main() {
    let a = 10
    return function sub() {
        console.log(a)
    }
}
const submain = main();
submain()

function counter() {
    let count = 0;
    return {
        increment: function () {
            return count += 1
        },
        getvalue: function () {
            console.log(count)
        }
    }
}
const counter1 = counter()
counter1.increment()
counter1.getvalue()

// Activity 2

function uniqueId(){
    let id = Math.floor(Math.random() * 10) + 1 
    return function refer(){
        return id += 1
    } 
}
let Id  = uniqueId()
console.log(Id())
console.log(Id())

function greetUser(){
    let user = "Hitesh"
    return function greet(){
        console.log(`Hello ${user} sir nice to meet you.`)
    }
}
const greet = greetUser()
greet()

// Activity 3

// Activity 4
function moduleList(){
    let arr = [];
    return{
        add: function(item){
            arr.push(item)
        },
        remove: function(item){
           return arr.splice(arr.indexOf(item), 1)
           
        },  
        display: function(){
            console.log(arr)
        }
    }
}

const list = moduleList();
list.add(1)
list.add(2)

list.display()
list.remove(2)
list.display()

// Activity 5

function computations(){
    let prevResult = 0
    return function storage(a, b){
        const obj = {"prevResult": prevResult,"result": 0}
        obj.result = a + b
        prevResult = obj.result
        console.log(obj.prevResult, obj.result)
    }
}
let compute = computations()
compute(10, 20)
compute(10, 40)