
// arrow function k andar this ka koi bhi reference exist nhi karraha hota h 
// let obj={
//     x:10,
//     fun:()=>{
//         console.log(this.x);
//     }
// }
// obj.fun()
let obj={
    x:10,
    fun(){
        y={
             gun:()=>{
                console.log(this.x);
             }
        }
        y.gun()
    }
}
obj.fun()



