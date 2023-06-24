class Product{
    name;
    description;
    #price;
    constructor(n,d,r){
      
        console.log("constructor callled");
        this.name=n;
        this.description=d;
        this.#price=r;
        // return 10; it will not return primitive data type;
        // return { x:"iphone",y:1000000} if we return object it do return
    }
    static custom(){
          console.log("calling static method");
        
    }
    get ratingetter(){
        console.log(this.#price);
    } 
    set rattingsetter(r)
    {
        if(r<0) return;
        this.#price=r;
        
    } 
    display(){
        // console.log(this); this keyword consist the reference of object 
        console.log("cool"); 
        console.log(this.name,this.description,this.#price);
    
    }
}
const obj=new Product("camera","socool",10000);
console.log(obj);
// obj.custom() static methods can't be called through obj they are class property

Product.custom()

obj.ratingetter;
obj.rattingsetter=20;
obj.display();

// obj.#price=40;
// console.log(obj.#price); can only be acessed in the class therefore private 
