class person{
     name;
     Age;

    constructor(n="Unknown",a=0){
        this.name=n;
        this.Age=a;
    }

    getDetails(){
        console.log(`Name:${this.name},Age:${this.Age}`);
    }

}

const person1=new person("Paras",30);
person1.getDetails();
const person2=new person();
person2.getDetails();