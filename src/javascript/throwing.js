function checkIfNum(n){
    if(isNaN(n)){
        throw "this is not a number";
    } else {
        console.log(n);
    }
}

try {
    checkIfNum("Pina");
} catch (error) {
    checkIfNum(1); 
}

const myObjException = {
    toString: function() {
        return "I am an object exception";
    }
}

try {
    throw myObjException;   
} catch (error) {
    console.log(error.toString());
}

function myException(message){
    this.message = message;
    this.name = "My exception";
    this.toString = () => {
        return `${this.name}: ${this.message}`
    }
}

try {
    throw new myException("lefeküdtem apáddal");
} catch (except){
    console.log(except.toString());
}

let myErrorLog = new Array();

function errorHandler(e){
    myErrorLog.push(e);
}

let myNum = "a";
try {
    checkIfNum(myNum);
} catch (error) {
    errorHandler(error);
}

console.log("I want to run!");
console.log(myErrorLog.length);

function StringExceptionError(value){
    this.value = value;
    this.message = "function requires a string";
    this.toString = function(){
        return `${this.value}: ${this.message}`;
    }
}

function booleanExceptionError (b) {
    this.value = b;
    this.message = "I am a booleanExceptionError!";
    this.toString = () => {
        return `${this.value}: ${this.message}`;
    }
}

function myString(string) {
    if(typeof string === "string") {
        this.value = string;
        this.getValue = function (){
            return `Your string: ${this.value}`;
        }
    } else if (typeof string === "boolean") {
        throw new booleanExceptionError(string);
    }
    else {
        throw new StringExceptionError(string);
    }
}

function verifyString(s){
    let str;
    try {
        str = new myString(s);
    } catch(e) {
        if(e instanceof StringExceptionError){
            console.log("String exception");
        } else if (e instanceof booleanExceptionError) {
            console.log("Boolean exception occured.");
        } else {
            console.log("Unknown error happened.");
        }
    } finally {
        always();
    }
    return str;
}

function always(){
    console.log("I always run! :)");
}

const a = verifyString(42);
const b = verifyString(true);
const c = verifyString(12342143);
const d = verifyString("12341234");

function finallyExample(){
    try {
        console.log("Hi");
        throw "test";
    } 
    catch(e) {
        console.log(e);
        return true;
    }
    finally {
        console.log("Can I run?");
        return false;               // The whole function gonna return false!!!
    }
    console.log("can i run also?");
}

console.log(finallyExample());