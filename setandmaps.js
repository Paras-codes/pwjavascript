let emptyset=new Set();
console.log(emptyset.size);
let myarray=[1,1,2,2,3,3,4,4,5,6];
let newset=new Set([...myarray])
console.log(newset);
newset.add(9)
console.log(newset);
newset.clear()
console.log(newset);

function setdifference(SetA,SetB){
return new Set([...SetA].filter(el=>!SetB.has(el))) 
}

let map=new Map()
console.log(map.size);
let array=[[1,"PARAS"],[2,"SAKSHI"],[3,"DEEPAK"]]
array.map((aelement)=>map.set(aelement[0],aelement[1]))
console.log(map);
//read map and set;

let map1=new Map();
map1.set(1,"one");
map1.set(2,"two");

for(const[key,value] of map1){
    console.log(`${key}=${value}`);
}
for(values of map1.values()){
    console.log(values);
}
for(key of map1.keys()){
    console.log(key);
}
for([key,value]of map1.entries()){
    console.log(`${key}=${value}`);
}
map1.forEach((key,value)=>{console.log(`${key}=${value}`);})
console.log([...map1.keys()]);
const arraysample=[["deep",1],["sakshi",3]];
let map2=new Map(arraysample);
console.log(map2);
console.log([...map2]);
console.log(Array.from(map2));
console.log([...map2.keys()]);
console.log(map2.get('deep'));
console.log(map2.delete('deep'));
console.log([...map2.keys()]);
console.log(map2.clear());
console.log(map2.size);
console.log(map2.has('deep'));



//merging in map
const orignal=[[1,'one'],[2,'two']];
let map3=new Map(orignal)
let clone = new Map(map3);
console.log([...map3]);
console.log([...clone]);
console.log(map3===clone);
let first=new Map([[1,'onr'],[2,'two'],[3,'three']]);
let second=new Map([[1,'uno'],[2,'dos']])
console.log([...first,...second]);