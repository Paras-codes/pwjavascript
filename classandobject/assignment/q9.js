function numbercheck(arr){
    return  function(num){
        return arr.includes(num);
    }
}
const number=numbercheck([3,4,5,7,8,0]);
console.log(number(6));