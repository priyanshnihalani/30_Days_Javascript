// Activity 1

function factorial(num) {
    if (num < 1) {
        return 1
    }
    else {
        return factorial(num - 1) * num
    }
}

console.log(factorial(5))

function fibonacci(num) {
    if (num <= 1) {
        return num
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}
console.log(fibonacci(2))

// Activity 2

let arr = [1, 2, 3, 4, 5]
function sum(arr) {
    if (arr.length == 0) {
        return 0
    }
    else {
        return arr[0] + sum(arr.slice(1))
    }
}
console.log(sum(arr))

function max(arr) {
    if (arr.length == 0) {
        return 0
    }
    else {
        let first = arr[0]; //1
        let rest = max(arr.slice(1))
        if(first > rest){
            return first;
        }
        else{
            return rest
        }
    }
}
console.log(max(arr))

// Activity 3

let str = "Hello World!"

function reverstring(str){
    if(str.length == 0){
        return ''
    }
    else{
        return str.charAt(str.length - 1) + reverstring(str.slice(0, -1))
    }
}
console.log(reverstring(str))

function Palindrom(str){
    if(str.length == 0){
        return ''
    }
    else{
        let reverString = reverstring(str)
        if(str == reverString){
            return "String is Palindrom"
        }
        else{
            return "String is not Palindrom"
        }
    }
}
let str1 = "rr"
console.log(Palindrom(str1))

// Activity 4

let sortedArray = [1,2,3,4,5];

function binarySearch(array, element){
    if(array.length == 0){
        return 0
    }
    else{
        let bool = (element == array[0] ? array[0] : binarySearch(array.slice(1), element))
        if(bool){
            return array.indexOf(element)
        }
        else{
            return "There is no element like this"
        }
    }
}
console.log(binarySearch(sortedArray, 4))

let repeatedArray = [1, 2, 2, 4, 5, 6, 1, 1];

function count(array, element){
    if(array.length == 0){
        return 0
    }
    else{
       let firstElement = (array[0] == element ? 1 : 0);
       return firstElement + count(array.slice(1), element)
    }
}
console.log(count(repeatedArray, 1))