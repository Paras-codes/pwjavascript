function manuplateString(st,fn){
    console.log(`the manuplated string is ${fn(st)}`);
}
function logString(st){
     return st.toUpperCase();
}
manuplateString("abhinav",logString);