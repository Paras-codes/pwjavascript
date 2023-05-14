let obj={id:101, name:"alex",salary: 1000}
// console.log(obj);

let emp=new Object()  // initialiastion  of  nempty object 
// console.log(emp);
emp.id=102;
emp.name="paras";
emp.striper= "rishang";
// console.log(emp);

function imp(i,n,m){

    this.id=i;
    this.name=n;
    this.striper=m;
}

const e=new imp(103,"Paras","rishang");
// console.log(e);

//fetching
// console.log(emp.id);
// console.log(emp['name']);

emp.id=13;
// console.log(emp);

delete emp.id;
// console.log(emp);

