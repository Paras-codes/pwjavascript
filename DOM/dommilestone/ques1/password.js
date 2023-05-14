const st = "Paras2002"
const btn=document.getElementById("btn")
let input=document.getElementById("inp")
// console.log(input.innerText);

function Passwordcheck(){
    // const passvalue=input.value
     
    if(input.value===st){
        alert("password matched")
    }
    else{
        alert("Password Not Matched")
    }
}
btn.addEventListener('click',Passwordcheck)
