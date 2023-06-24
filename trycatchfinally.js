try{
    //consist of risky code 
    console.log("hello");
    console.log(a);
}catch{
    //executed only when error is found in try column
    console.log("error found");
}
finally{
    // it is executed always irrespective of try and catch
    console.log("whatever");
}