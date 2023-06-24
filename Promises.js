// promise ek object h jo readability ko acha karta h 
function createPromise(){
    return new Promise(function(reject,resolve){
        setTimeout(function f(){
            console.log("finally here");
            resolve('done')
        },3000)
    })
}
console.log('start');
let x=createPromise();
console.log("got a new promise");
x.then(function f(value){
    console.log('promise done',value);
}).catch(function f(value){
    console.log('caught',value);
})
console.log("end");