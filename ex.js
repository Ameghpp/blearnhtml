//1

let arr=["red","green","blue"]
arr.push("yellow");
console.log(arr);
arr.pop();
console.log(arr);


arr.unshift("black");
console.log(arr);

arr.shift();
console.log(arr);


//2

num=[2,4,6,8]
newnum=num.map(n=> n*4)
console.log(newnum)

let fn=num.find(n=> n>5)
console.log(fn)


//3
ar1=[10,20]
ar2=[30,40]
let ar3 = ar1.concat(ar2)
console.log(ar3);
let newar=ar3.splice(0,2);
console.log(newar);

//4
array=["apple","mango","orange"]
console.log(array);
array.splice(1,1,"grapes")
console.log(array);

array.reverse();
console.log(array);

array.sort();
console.log(array);


//5

ary=["html","css","javascript"]
 console.log(ary.join(" "));
 console.log(ary.push("react"));
 console.log(ary.sort());






