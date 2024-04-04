//primitive types
//7 Types:string,number,null,undefined,boolean,symbol,bigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=176234085368546n


//Reference
//Non primitive
//Array,Objects,Functions

const heros=["shaktiman","naagraj","Doga"];
let myObj={
    name:"Raeesa",
    age:25,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof myObj)

