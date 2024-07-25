// Activity 1

let arr1 = [1,2,3,4,5]
console.log(arr1)

console.log(arr1[0])
console.log(arr1[arr1.length-1])

// Activity 2

arr1.push(6)
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.unshift(0)
console.log(arr1)

arr1.shift()
console.log(arr1)

// Activity 3

let newarr = arr1.map((item) => {
    return item * 2
})
console.log(newarr)

let everarr  = arr1.filter((item) => {
    if(item % 2 == 0){
        return item
    }
})
console.log(everarr)

let sumarr = arr1.reduce((prev, next) => {
    return prev + next
}, 0)
console.log(sumarr)


// Activity 4

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}

arr1.forEach((item) => {
    console.log(item)
})

// Activity 5

let twoDarr = [[1,2, 3, 4, 5], [6, 7, 8, 9, 10]];
console.log(twoDarr)

console.log(twoDarr[1][1])