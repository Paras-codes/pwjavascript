
let str={
    example:"hitesh        "
}
Object.prototype.truelength= function(){
    console.log(`true length is ${this.example.trim().length}`)
}
str.truelength()
String.prototype.truelength2= function(){
    console.log(`true length is ${this.trim().length}`)
}

"anurag             ".truelength2();