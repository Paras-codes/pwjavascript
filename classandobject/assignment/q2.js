 function getPerson(person){
    try{
        if(typeof(person)!=='object'||!person.name||!person.age){
            throw new Error("Invalid Parameter");
        }
        return `Name:${person.name},Age:${person.age}`
    }catch(err){
        return err.message;
    }

 }
 console.log(getPerson(["name","age"]));