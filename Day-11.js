// // Activity 1
new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 2000)
}).then(() => {
    console.log("Promise Resolved")
})



new Promise((_, reject) => {
    if (10 / 0 == Infinity) {
        setTimeout(() => {
            reject()
        }, 2000)
    }
}).catch(() => {
    console.log("Number cannot be divided by zero")
})

// Activity 2

new Promise((resolve) => {
    setTimeout(() => {
        console.log("fetching user details...")
        resolve("user details fetched")
    }, 1000)
}).then((message) => {
    console.log(message)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("validating order...")
            resolve("Order Validated")
        }, 1000)
    })
}).then((message) => {
    console.log(message)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing Payment...")
            resolve("Payment Processed")
        }, 1000)
    })
}).then((message) => {
    console.log(message)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dispatching order...")
            resolve("Order Dispatched")
        }, 1000)
    })
}).then((message) => {
    console.log(message);
});



// Activity 3

async function asyncresolve(){
     await new Promise((resolve) => {
        console.log("Resolving Promise...")
        setTimeout(() => {
            resolve("Promise Resolved")
        },1000)
    })
}
asyncresolve()

async function asyncreject(){
    try{
        await new Promise((_, reject) => {
            console.log("Rejecting Promise...")
            setTimeout(() => {
                reject("Promise Rejected")
            }, 1000)
        })
        
    }
    catch(error){
        console.log(error)
    }
}
asyncreject()

// Activity 4

new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products").then((response) => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Something Went Wrong")
        }
    }).then((data) => {
        resolve(data)
    }).catch((error) => {
        reject("Someting Went Wrong: " + error.message)
    })
}).then(result => {
    console.log(result);  
})
.catch(error => {
    console.error(error);  
});

async function fetchData(){
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json();
        console.log(result);
    }
    catch(exception){
        console.log(exception)
    }

}
fetchData()

// Activity 5

const promise1 = Promise.resolve("Promise 1")
const promise2 = Promise.resolve("Promise 2")
const promise3 = Promise.resolve("Promise 3")

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result)
})

const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 4")
    }, 2000)
})
const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 5")
    }, 1000)
})
const promise6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 6")
    }, 3000)
})

Promise.race([promise4, promise5, promise6]).then((result)=>{
    console.log(result)
})