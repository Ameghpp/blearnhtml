
//1
function WelcomeMessage(){
         console.log("Welcome to Our Wensite")
 }
 WelcomeMessage();
 WelcomeMessage();

 //2
 function printDate(){
    console.log((new Date))
 }
printDate();

 //1
function GreetUser(name){
    console.log("hello  " +name);
}
GreetUser("rajesh");
GreetUser("saji");
GreetUser("manoj");

 //2
 let l=10;
 let b=5;
 function rect(){
    console.log("area of rectangle is  "+ (l*b));
 }
 rect();

 //3

 function DisplayMarks(subject,marks){
     console.log( "Subject : " +subject);
     console.log( "mark : " +marks);

 }
 DisplayMarks("maths",98);
 DisplayMarks("science",98);
 DisplayMarks("social",98);

 //11

 const subtratct =(no1,no2)=>{
    return no1-no2;
 }
 console.log(subtratct(10,5));

 //12

 const GetFullName =(FirstName,LastName)=>{
    return FirstName+" "+LastName;
}
console.log(GetFullName("amegh","pp"));


//13

const EvenNum =(num)=>{
    if (num%2==0){
        return "its an even number"
    }
    else{
        return "its an odd number"
    }
}
console.log(EvenNum(7))