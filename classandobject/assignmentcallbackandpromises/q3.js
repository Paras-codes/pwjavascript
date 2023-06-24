function ageInDays(person,fn){
    let fullname=person.firstname+" "+person.lastname
    let ageindays=person.age*365;
    return fn(fullname,ageindays);
}

function exec(name,age){
    return console.log(`The person full name is ${name} and their age in days is ${age}`);
}
ageInDays({firstname:"Paras",lastname:"sahu",age:21},exec)