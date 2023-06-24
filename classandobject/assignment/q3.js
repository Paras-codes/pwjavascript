class car{
    year;
    company;
    model;
    constructor(y,c,m){
        this.year=y;
        this.company=c;
        this.model=m;
    }
    getdescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}`);
    }
}

 const myCar=new car(2002,"Skoda","Rapid");
 myCar.getdescription();