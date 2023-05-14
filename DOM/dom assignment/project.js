let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let input=document.getElementById("input")

console.log(input.innerText);
function increment(){
    let value=Number(input.innerText);
  if(value>=10)
  {
    alert("it cant be increased more")
  }
  else{
    input.innerText=value+1;
  }
}
function decrement(){
    let value=Number(input.innerText);
    if(value<=0)
    {
      alert("it cant be deccreased more")
    }
    else{
      input.innerText=value-1;
    }
  }

function Reset(){
   input.innerText=0;
   
}
btn1.addEventListener("click",decrement)
btn2.addEventListener("click",increment)
btn3.addEventListener("click",Reset)

