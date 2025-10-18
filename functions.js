// //function declaration
// function greet(){
//     console.log("hello world")
// }
// greet();//function call

// //function wuth parameters 

// function GreetByName(name){
//     console.log("hello  " +name);
// }
// GreetByName("Rahul Sharma")

// //method (function inside a object)
// let student={
//     name : "Rahul sharma",
//     age : 21,
//     greet : function (){
//         console.log("hello, my name is " +this.name)
//         console.log("i am " +this.age)
//     }
// };
// student.greet();


//arrrow function 

// const greet =(name)=>{
//     return "hello" + name;
// }

// const greet =(name)=>{
//     return "hello" +name;
// }
// console.log(greet(rahul));


// console.log(greet(sharma));

//dom (document object model)

// let a = document.getElementById("head1");
// console.log(a);

// //change the style of the web page / change the complete text 
// a.innerHTML = "Learning javascript";
// a.style.color="green";

const Decreasebtn = document.getElementById("Decreasebtn");
const Resetbtn = document.getElementById("Resetbtn");
const Increasebtn = document.getElementById("Increasebtn");
const countLabel = document.getElementById("countLabel")
let count=0;

Increasebtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
Resetbtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
Decreasebtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}


















