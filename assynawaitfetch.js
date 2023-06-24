function createPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function f(){
            console.log("finally here");
            resolve(10);
        },3000)
    })
}
async function consume(){
    console.log("inside function");
    const response= await createPromise()
    const response1=await createPromise();
    console.log("response is ",response);
    console.log(response1);
}
console.log('start');
consume();
console.log('end');