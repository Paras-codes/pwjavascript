class Product{
    name;
    description;
    price;
    constructor(n,d,r){
      
        console.log("constructor callled");
        this.name=n;
        this.description=d;
        this.price=r;
        // return 10; it will not return primitive data type;
        // return { x:"iphone",y:1000000} if we return object it do return
    }
    static custom(){
          console.log("calling static method");
    }
    display(){
        // console.log(this); this keyword consist the reference of object 
        console.log("cool");
    }
}
const obj=new Product("camera","socool",10000);
console.log(obj);
// obj.custom() static methods can't be called through obj they are class property

Product.custom()
obj.display();
obj.name="iphone";
console.log(obj.name);


// when class concept was not their there was used
function constructor(n,d,r){
    this.name=n
    this.description=d;
    this.price=r;
    // console.log(this);
}
const t =new constructor("wiper","socool",10000)
// console.log(t);

let x={
    // p:constructor
}

// x.p("air dopes","perfect",20000)
// this keyword is different in js than other language 
// this refers to the context from where it is called 

