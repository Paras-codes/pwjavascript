try{fetch('https://jsonplaceholder.typicode.com/posts/123456789')
.then(res=>res.json())
}
catch{
   alert("error");
}