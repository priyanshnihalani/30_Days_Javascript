// Activity 1

const books = {
    title: 'The Man who sold his Ferrari',
    author: 'Robin Sharma',
    year: '1999'
}

console.log(books.title,',',books.author)

// Activity 2

books.info = function()  {
    return `${this.title} by ${this.author}`
}

console.log(books.info())

books.updateYear = function(year){
    return this.year = year;
}
console.log(books.updateYear(2000))
console.log(books)

// Activity 3

books.library = {
    name: 'newlibrary',
    books: [
        {
            title: 'title1',
            author: 'author1',
            year: 2001
        },
        {
            title: 'title2',
            author: 'author2',
            year: 2003
        }
    ]
}

console.log(books.library)

console.log(books.library.name)

let arr = books.library.books
console.log(arr)

for(let i = 0; i<arr.length; i++){
    console.log(arr[i].title)
}

// Activity 4

books.info = function()  {
    return `${this.title} by ${this.author}`
}

console.log(books.info())

// Activity 5

for(let key in books){
    console.log(key,":",books[key])
}

console.log(Object.keys(books))
console.log(Object.values(books))