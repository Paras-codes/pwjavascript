function books(library,exec){
    let tit=[];
    library.map((el)=>{
        tit.push(el.tittle);
    })
    return exec(tit);
}
function exec(list){
   return console.log(list);
}
let lib=[{tittle:"roj se aao",author:"parth",year:2000},{tittle:"meenu ki sagai ",author:"parth",year:2000}]
books(lib,exec)