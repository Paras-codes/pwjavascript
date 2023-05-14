//higher order functions(here functions are passed as variable)
const onefun = m =>{
    const twofun = n =>{
        const funfun = p =>{
            return m+n+p;
        }
        return funfun;
    }
    return twofun;
}
console.log(onefun(4)(5)(6));                 

const Nums=[2,3,4,5]
const sumArray= arr => {
    let total=0;

    arr.forEach(element => {
       total += element ;
    });
    return total;
}
console.log(sumArray(Nums));

function onemorehello(){
    console.log("hello Paras",Math.random());
}

setInterval(onemorehello,1000)