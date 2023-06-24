// let str={
//     example:"123"
// }
// Object.prototype.Number = function(){
//     console.log(`converted string is ${parseInt(this.example,10)}`);
// }


// str.Number()

String.prototype.Number2 = function(){
    let a=parseInt(this,10);
    
         if(isNaN(a)){
            try{
                console.log(b);
            }catch{
            console.log("invalid");
            }
         }
         else{
           console.log(`converted string is ${a}`);
         }
}


"123".Number2()
"abc".Number2()