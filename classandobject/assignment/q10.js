function filterByCategory(products){
      return function(category){ 
        
        return products.filter((el)=>el.categori===category)
    
      }
}
//
let products=[{name:"shruti",categori:"clothing"},{name:"suman",categori:"clothing"}]
let clothingproduct=filterByCategory(products)("clothing")
console.log(clothingproduct);