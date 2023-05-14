let emp={
    id:101,
    name: "paras",
    age:21

};
console.log(emp);

let key=Object.keys(emp);
console.log(key);
let values=Object.values(emp);
console.log(values);

Object.seal(emp);//method to seal addition and deletion of fields
emp.salary=1000000;

console.log(emp);

Object.freeze(emp)//to freez manuplation
emp.id=12;
console.log(emp);