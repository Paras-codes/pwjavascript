const student={
    name:"mithun"
}
Object.prototype.printdetails=function(){
    console.log(`Hello,the student is ${this.name}`);
}

student.printdetails();