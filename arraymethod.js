let arr=[1,2,3,4,5]

// console.log(arr);

arr.push(6,7,8)
// console.log(arr);

arr.pop()
console.log(arr);

let a= arr.shift()
console.log(a);

console.log(arr);

arr.unshift(10,11,12)
console.log("--------------");
console.log(arr);
let s=arr.join(" ")
console.log(s);

let a1=[2,3,4,"paras"]
let a2=[5,6,7,"sakshi"]
let a3=a1.concat(a2)
console.log(a3);
console.log(a3.reverse())
//to extract particular pos
console.log(a3.slice(1,4));

console.log(a3);

//to add element in middle
console.log(a3.splice(2,2,8));
console.log(a3);