//inserting variable

// let name = "rahul";
// console.log(`hello ${name} ,welcome to this `)

// //expression inside ${}

// let a=10;
// let b=20;
// console.log(`sum of ${a} and ${b} is ${a+b}`)

// //multiple -line string

// let message=`hello world,
// welcome to es6 session
// lets learn templete literals!`
// console.log(message);


//ternary operator

// let age=18;
// let message= age>20 ? "you are an adult" : "you are an minor"
// console.log(message);

// //Nested ternary 

// let marks = 85;
// let grade = marks>90 ? "A+" : marks>75?"A":"B";
// console.log(grade);

//object destructuring

// const user = { user:Rahul,age:22,city:"ernakulam"}
// const {name,age}=user;

// console.log(name);
// console.log(age);



// //rename variable

// const{name:userName,age:DOB}=user
// console.log(userName);
// console.log(DOB);


//default Values

// const user = { user:Rahul,age:22,city:"ernakulam"}
// const{country="india"}=user;
// console.log(country)


// //missing property with default value

// const student={name:rahul,age:23};
// const{name,course="JAVA FS"} =student;
// console.log(course)

//property present => default ignored

// const student={name:"amegh",course:"Data science"}
// const {course="mern"}=student;
// console.log(course);

// //multiple Default together
// const user = {username:"arjun"};
// const {username,role="student",country="india"}=user
// console.log(username);
// console.log(role);
// console.log(country);


//nested obh=ject with default view

// const user={
//     name:"archana",
//     address:{city:"chennai"}
//     };
// const {address:{city,pin=900001}}=user;
// console.log(pin);

// const colors = ["red","green","blue"];
// const [third,secound,first] = colors

// console.log(third);
// console.log(secound);
// console.log(first);

// const numbers = [10,20,30,40];
// const[a, ,c] =numbers;
// console.log(a);
// console.log(c);
// console.log(b);

// let x=10;
// let y=20;
// [x,y]=[y,x];
// console.log(x,y);


// const arr =[1,[2,3]];
// const [a,[b,c]] = arr;
// console.log(a,b,c);


// const arr1 =[1,2];
// console.log(arr1);
// const arr2 =[3,4];
// console.log(arr2);

// const combined =[...arr1,...ar2];
// console.log(combined);

// const original =[10,20,30,40];
// const copy =[...orignal];
// console.log(copy);


// const num=[5,10,30]
// console.log(Math.max(...num));


// function sum(...numbers){
//     return numbers.reduce((a,b)=> a+b);

// }
// console.log(sum(1,2,3));
// console.log(sum(4,5,6));


// //find index

// const number =[10,20,30,40,50];
// const index = number.findIndex(n => n===30);
// console.log(index);


// //some()
// const marks = [35,57,75];
// console.log(marks.some(m => m>70));

// //every()

// const mark =[65,70,75];
// console.lpog(mark.every(m => m>=60));

// //include()
// const fruit =["apple","orange","mango"];
// fruits.forEach(fruit => console.log(fruit));


// //2. Map()
// const numbers1 = [1, 2, 3];
// console.log(numbers1);
// const doubled = numbers1.map(num => num * 2);
// console.log(doubled);

// //3. filter()
// const age = [15, 22, 37, 10];
// const adult = age.filter(age => age >= 18);
// console.log(adult);

// //4. reduce()
// const numb = [10, 20, 30];
// const total = numb.reduce((sum, numb) => sum + numb);
// console.log(total);

// //5. find()
// const users = [
//     { id: 1, name1: "Rahul" },
//     { id: 2, name1: "Riya" }
// ];
// console.log(users);
// const user = users.find(u => u.id == 2);
// console.log(user.name1)

const orderPizza = new Promise((resolve,reject)=>{
    let pizzaReady = false;

    if (pizzaReady){
        resolve("pizza is ready");

    }
    else{
        reject("sorry");
    }
});

orderePizza
.then((message)=>console.log(message))
.catch((error)=>console.log(error));


function getData(){
    return new Promise(resolve) => {
        setTimer(()=>{
            setTimeout(()=>{
                resolve("data fetched successfully")
            },5000)
        })
    }
}

async function fetchData(){
    console.log("Task completed")
    const result = await getData();
    console.log(result);
}

fetchData();

