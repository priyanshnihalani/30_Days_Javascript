// Activity 1
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     greeting() {
//        return `Happy Birthday ${this.name} your now ${this.age} years old.` 
//     }
//     updateAge(age){
//         this.age = age
//         console.log(this.age)
//     }
// }
// const person = new Person("Preet", 20);
// console.log(person.greeting())
// person.updateAge(21)
// console.log(person.greeting())

// Activity 2

// class Student extends Person{
//     constructor(name, studentId){
//         super()
//         this.name = name
//         this.studentId = studentId
//     }
//     studentInfo(){
//         return this.studentId
//     }
//     greeting(){
//         console.log(`Hi ${this.name} your student Id is ${this.studentId}`)
//     }
// }
// const student = new Student("Preet", 16)
// console.log(student.studentInfo())
// student.greeting()

// Activity 3

// class Person{
//    static generic(){
//      return "Follow chaiaurcode on youtube to learn best javascript and other programming language."
//    }  
// }
// console.log(Person.generic())

// class Student{
//     static countStudents = 0;
//     constructor(){
//         return Student.countStudents += 1 
//     }
// }
//  new Student();
//  new Student()

// console.log(Student.countStudents)

// Activity 4

// class Person{
//     constructor(firstname, lastname){
//         this._firstname = firstname
//         this._lastname = lastname
//     }
//     get firstname(){
//         return this._firstname
//     }
//     get lastname(){
//         return this._lastname
//     }

// }
// const person = new Person("Rohan", "Singh")
// console.log(person.firstname, person.lastname)

// class Person{
//     constructor(firstname, lastname){
//         this._firstname = firstname
//         this._lastname = lastname
//     }
//     get firstname(){
//         return this._firstname
//     }
//     set firstname(newfirstname){
//         this._firstname = newfirstname
//     }
//     get lastname(){
//         return this._lastname
//     }
//     set lastname(newlastname){
//         this._lastname = newlastname
//     }
// }
// const person = new Person('Rohan', 'Singh')
// console.log(person.firstname, person.lastname)

// person.firstname = "Manpreet"
// console.log(person.firstname, person.lastname)


class Account{
    #balance = 0;
    deposit(amt){
        this.#balance += amt
        return "Money Deposited"
    }
    withdraw(amt){
        this.#balance -= amt
        return "Money Withdrawn"
    }
    balance(){
        console.log(this.#balance)
    }
}
const account = new Account();
console.log(account.deposit(500000))
account.balance()

console.log(account.withdraw(100000))
account.balance()

