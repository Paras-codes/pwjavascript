function exec1(arr, fn){
    fn(arr);
}
function exec(arr){
    let a =[];
    arr.map((el)=>{
          a.push(2*el)         })
    console.log(a);
}
exec1([1,2,3,4,5],exec);