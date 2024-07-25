// Activity 1

for(let i=1; i<=10; i++){
    console.log(i)
}

for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`)
}

// Activity 2

let num = 1;
let sum = 0;

while(num<=5){
    sum += num
    num++;
}
console.log(sum)

let reverseLoop = 10
while(reverseLoop >= 1){
    console.log(reverseLoop)
    reverseLoop--;
}
// Activity 3

let doit = 1;

do{
    console.log(doit)
    doit++
}while(doit <= 5)

let number = 5;
let factorial=1;
let i = 1
do{
    factorial = factorial * i
    i++
}while(i<=number)
console.log(factorial)

// Activity 4

for(i=1; i<=5; i++){
    let str= ""
    for(let j=1; j<=i; j++){
        str += "*"
    }
    console.log(str)
}

// Actitivity 5

for(let i=1; i<=10; i++){
    if(i==5){
        continue
    }
    else{
        console.log(i)
    }
}

for(let i=1; i<=10; i++){
    if(i==7){
        break;
    }
    else{
        console.log(i)
    }
}