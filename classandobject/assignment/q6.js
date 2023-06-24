class calculator{
  // static method does'nt have acess to this keyword 
  static add(l,r){ 
    console.log(l+r);
  }
}

const calc=new calculator();
calculator.add(10,20);
