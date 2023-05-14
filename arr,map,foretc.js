const heros = ["galgadotraj","tom","gigiraj","zendya"];
heros.forEach((el)=>{
    // console.log(el.toUpperCase());
})
const arr=[1,2,3,4,5];
arr.map((el,index,arr)=>{
    // console.log(el, index ,arr);
})

heros.map((el)=>{
//    console.log(el.toUpperCase());
})

//  Filter

let names= heros.filter((el)=>{
    // return is necessary
    return el.endsWith('raj');    
})
console.log(names);

//shopping cart
const cartbill=[220,40,60]
let bill= cartbill.reduce((prev,curr) =>prev+curr,100)
// console.log(bill);

// gaming prospective
const gamescore=[200,100,20,300,400]
// console.log(typeof gamescore[1]); returning data type=string
let check=gamescore.every((h)=>typeof h ==='number')
console.log(check);

// score greater than200
// find= phla jo greater milega use find karega
let greater=gamescore.find((h)=> h>200)
console.log(greater);
// findindex
// some
// sort 
