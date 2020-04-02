
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greetings = function(){
//     console.log("Greetings");
// }

// var a = new Person('Béla', 62);
// a.greetings();

// function Employee(name, age, role){
//     Person.call(this, name, age);
//     this.role = role;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.console = Employee;

// const bill = new Employee("Bill", 41, "janitor");
// bill.greetings();

// class Person {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const bob = new Person("Bob", 30);
// console.log(Person.prototype);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return "Hi!";
    }

    static sayHey(){
        return "Hey wazzup?";
    }
}

class Employee extends Person {
    constructor(name, age, position){
        super(name, age);
        this.position = position;
    }

    testGreeting(){
        return `${this.name} says ${super.greeting()}`;
    }
}

const barb = new Employee("Barb", 27, "developer");
console.log(barb.testGreeting());

class Customer extends Person {
    constructor({name = "customer", age = "n/a", contactMethod}){
        super(name, age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;
    }

    addCredit(amount){
        this.accountCredit += amount;
    }

    reduceCredit(amount){
        this.accountCredit -= amount;
    }

    showCredit(){
        return `${this.name} has ${this.accountCredit}$ credit. `
    }
    
    static sayHi(){
        console.log("Hi class! :D");
    }

    static sayCustomerNames(...customers){
        return customers.map(function(element){
            return element.name;
        }).join(", ");
    }

    static transferBalance(c1, c2, amount){
        if(c1.accountCredit < amount){
            throw `Not enough money in ${c1.name}'s balance!`
        }
        else {
            c1.accountCredit -= amount;
            c2.accountCredit += amount
        }
    }
}

let customer1 = new Customer({name: "Bob", contactMethod: "email"});
let customer2 = new Customer({name: "Jane Doe", contactMethod: "mobile phone"});
let customer3 = new Customer({name: "Ashley", contactMethod: "pigeon"});

customer1.addCredit(100);
customer1.reduceCredit(50);
customer2.addCredit(25);

console.log(Customer.sayHey());
console.log(Customer.sayCustomerNames(customer1, customer2, customer3));

Customer.transferBalance(customer2, customer1, 25);
console.log(customer1.showCredit());
console.log(customer2.showCredit());
Customer.transferBalance(customer2, customer1, 10);