// function passed in higherorder functio are known as callback 
// asynchronus piece of code (line by line execution niii hona)
// js is a single threaded language 
// native code (jinhe js janta h) are synchronus 
console.log('start');
// setTimeout feature -js browser m runtime enviroment trigger hoga aur fir eecute hoga timmmer k baad 
setTimeout(function(){
    console.log('timer done');
},3000)
console.log('end');
// phle synchronuosly saare native codes execute honge fir runtime wale 
for(let i=0;i<1000000000000;i++){}


// their is a problem jb 2 3 time out h synchronus peice of code k phle to konsa phle execute  hoga bo jo runtime m phle execute hojaiga jo h ki (jiska timeout time kam h )bo phle queue m jaiya uske bad dusra time out function queue m jaiga fir event  looop check karega ki call stack empty h agar h to fifo order se queue se nikalkar stack m dalega execution k baad empty hojaiga fir dusra dalega stack m


// problem in call back
// 1.callback hell 
// 2.inversion of control = function ka controll kissi aur function ko  dedena


