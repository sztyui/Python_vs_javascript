
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

class FamilyMember {
    constructor(lastName, firstName, relationship){
        this.lastName = lastName;
        this.firstName = firstName;
        this.relationship = relationship;
    }

    sayFamilyName(){
        console.log(`We are the ${this.lastName}s!`)
    }
}

class FamilyGroup {
    constructor(parents){
        this.parents = parents;
        this.children = [];
    }

    addMember(member){
        this.children.push(member);
    }
}

const dad = new FamilyMember("Smith", "Bill", "Father");
const mum = new FamilyMember("Smith", "Catherine", "Mother");
const annie = new FamilyMember("Smith", "Annie", "daughter");
const will = new FamilyMember("Smith", "Will", "son");
const theSmiths = new FamilyGroup([dad, mum]);
theSmiths.addMember(annie);
theSmiths.addMember(will);
console.log(theSmiths);

// class Family {
//     constructor(lastName){
//         this.lastName = lastName;
//     }

//     sayFamilyName(){
//         console.log(`We are the ${this.lastName}s!`)
//     }
// }

// class Parents extends Family {
//     constructor(lastName, firstName){
//         super(lastName);
//         this.firstName = firstName;
//     }
// }

// class Child extends Family {
//     constructor(lastName, firstName){
//         super(lastName);
//         this.firstName = firstName;
//     }
// }

// const dad = new Parents("Smith", "George");
// const mum = new Parents("Smith", "Patty");
// const jimmy = new Child("Smith", "Jimmy");

// const dad = new FamilyMember("Smith", "Bill", "Father");
// const annie = new FamilyMember("Smith", "Bill", "daughter");