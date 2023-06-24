class Employee{
    name;
    position;
    salary;
    constructor(n,p,s){
        this.name=n;
        this.position=p;
        this.salary=s;

    }
    getSalary(){
        console.log(`${this.salary}`);
    }
}

const e=new Employee("paras","SDE",100000);
e.getSalary();