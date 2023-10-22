let button=document.querySelector(".but");
const randomcolor= () =>{
    let val="0123456789ABCDEF";
    let cons="#"
    for(i=0;i<6;i++){
        cons=cons+val[Math.floor(Math.random()*16)]
    }
    return cons;
}
function apply(){
  button.style.backgroundColor=randomcolor();
 document.body.style.backgroundColor=randomcolor();   
}
button.addEventListener("click",apply);