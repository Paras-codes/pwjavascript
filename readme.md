temporal dead zone 
jab bhi koi chiz script m hogi tb tk bo temporal zone state m hoga 
for eg:- var and let conflict (182 last);

Important take away from function revision class 

1. arrow function for a normal function 
    
    function adtwo(num1,num2){
        return num1+num2;
    }

    ARROW FUNCTION

      1. const addtwonumbers= (num1,num2)=>{
            return num1+num2;
          }

      2.  const addtwonumbersv2=(num1,num) => num1+num2
         agar sirf ek line m return karna ho jaruri nahi h ki parenthesis lagao

      3.   const addtwonumberv3 = num1 => 5
           agar ek argument ho to brackets ki jarurat nii h

      4.  const addtwonumberv3 = num1 => ({email:"   " })

2,3,4 m return implicitly lga hua h

2. this keyword in the arrow function
    >  this keyword global object ko refer karta h node ka global object node ka empty hota h 
    >   this function jb bhi arrow function m execute hota h to empty object aata h 

OBJECT REVISION CLASS
   