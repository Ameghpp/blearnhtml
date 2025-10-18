//question 1
class Student{
    #marks;
constructor(marks){
    this.#marks=marks;
}
setMarks(m){
    if(m>=0){
        this.#marks=m;
    }
    else{
        console.log("marks cannot be negative");
    }
}
getMarks(){
    console.log(this.#marks);
}
}
const student=new Student();
student.setMarks(-1);
student.getMarks();

//question 2

class vehicle{
    start(){
        console.log("start method should be implemented by subclass")
    }
}
class Car extends vehicle {
  start() {
    console.log("Car is starting...");
  }
}
class Bike extends vehicle {
  start() {
    console.log("Bike is starting...");
  }
}
const car = new Car();
const bike = new Bike();
car.start();
bike.start();



//question 3
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    work(){
        console.log("employee is working")
    }
}
class Manager extends Employee{
    manage(){
        console.log("manager is managing the team")
    }
}
const employee=new Employee("akshay",7000);
const manager=new Manager("aman",60000)
employee.work();
manager.work();
manager.manage();



// question 4

class animal{
    speak(){
    console.log("this makes a noise");
    }
}
class dog extends animal{
    speak(){
        console.log("Dog barks");
    }
}
class cat extends animal{
    speak(){
        console.log("cat meows")
    }
} 

const d=new dog();
const c=new cat();
d.speak();
c.speak();