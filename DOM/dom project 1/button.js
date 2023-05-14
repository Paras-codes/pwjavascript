// 1.button pakadna h

const btn= document.getElementById("btn");
// console.log(btn);
const randomColor = () => {
    let val = "0123456789ABCDEF"
    let hex = "#"
    for(let i=0; i < 6 ; i++)
    {
        hex = hex + val[Math.floor(Math.random() * 16)];
    }
 return hex;
}
function colourChange()
{

    document.body.style.backgroundColor=randomColor();
    btn.style.backgroundColor=randomColor()
    btn.style.color=randomColor()
}
// console.log(colourChange());
btn.addEventListener("click",colourChange);
