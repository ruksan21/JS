 // demo() parathesis aayeo bhane function call huncha
function demo() { 
    console.log("This is function Call"); 
}
demo();
 

// adding two number

function add(){
    console.log(2+3);
}
add();


// Subbtraction 

function sub(){
    console.log("The subtract value is : " , 3-2);
}
sub();

// Function with parameter

// function sum(x, y,z);{
//    let z
//    z=x+y;
//    return z;
// }
// sum(1,20);


// const sub = function(j, k){
//     console.log(j+K)
// }



// function demofun(){
//     return "Hello World!"
// }
// let result = demofun()

// function name(first_name, lastname , age){
//     return "MY name is "+ first_name + "" + lastname ,"mine age is :" , age 
// }
// console.log (name ("Ruksan","Karki","age"));



// arrow function
const arrowFun = ( num1 , num2 )=>  
console.log("the addition of num1 and num2 is :" , num1+num2)
arrowFun( 6,9)



// Object ko bhitra function 

const laptop ={
    brand:"Asus",
    model:"Rdfghjkl234567",
    Ram: "8GB",
    SSD: "512GB",
    laptopFunction:function(){
        
    }
}