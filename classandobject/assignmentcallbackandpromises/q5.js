function greet(name){
    return new Promise((resolve, reject) => {
        console.log(`Hello ${name}`);
        resolve("done");
    })
}
let x=greet("Paras");

