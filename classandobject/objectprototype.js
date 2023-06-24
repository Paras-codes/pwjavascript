let myheros=['thor','spiderman'];
let dcheros=['batman','wonderwomen']

let heropower={
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.captain= function(){
    console.log("paras is here");
}
console.log(myheros.captain());
console.log(heropower.captain());

Array.prototype.thanos=function(){
    console.log('snap it');
}
console.log(myheros.thanos());
// console.log(heropower.thanos());//eror h ye kyuki y object h does,nt consist of any array typr prototype

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// inheritance


const User = {
    name: "topname",
    email: "top@gmail.com"
}

const teacher={
    makeVideos:true
}

const teachingsupp = {
    isAvailable:false
}

const tAAssistant = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: teachingsupp
}

// // teacher.__proto__=User;

// // present m ese use hota h 

// Object.setPrototypeOf(teachingsupp,teacher);

// console.log(teachingsupp.makeVideos);

// console.log(tAAssistant.isAvailable);

String.prototype.truelength= funtion(){
    console.log(`true length is ${this.trim().length}`);
}

"hitesh       ".truelength();
"paras       ".truelength()