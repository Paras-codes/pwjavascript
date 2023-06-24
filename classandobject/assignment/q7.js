// class User{
//     username;
//     #password;

//     constructor(un,pass){
//         this.username=un;
//         this.#password=pass;
//     }
//     get pssw(){
//         let temp=this.#password;
//         let st="";

//         for(let i=0;i<temp.length;i++){
//             st+="#"
//         }
//         return st;
//     }
//     set password(p){
//         let pass=this.#password.length;
//         let passa=[...this.#password];
//         let n=0;
//         let u=0;
//         if(pass>=8){
//            passa.map((el)=>{
//                  if(el.charCodeAt(0)>=48 && el.charCodeAt(0)<=57){
//                     n++;
//                  }
//                 else if(el.charCodeAt(0)>=65 && el.charCodeAt(0)<=90){
//                     u++;
//                  }
//            })
//            if(n>=1&&u>=1){
//             this.#password=p;
//             console.log(this.#password);
//            }
//            else{
//             console.log("error");
//            }
//         }
//         else{
//           console.log("error");
//         }
//     }
// }
// const obj=new User("paras_code","parasA01234");
// console.log(obj.pssw);
// obj.password="fuckyou";
// // const s="Paras";
// // let t="";
// // console.log([...s]);
// // for(let i=0;i<s.length;i++){
// //     t+="#";
// // }
// // console.log(t);

class User {
    username;
    #password;
    constructor({ username, password }) {
      this.username = username;
      this.#password = password;
    }
  
    get password() {
      const { length } = this.#password;
      const temp = Array(length).fill("#");
      return temp.join("");
    }
  
    set password(password) {
      const { length } = this.#password;
      const requirements = {
        lowercase: false,
        uppercase: false,
        number: false,
      };
      const characters = [...this.#password];
      characters.forEach((char) => {
        if (char >= "a" && char <= "z") {
          requirements.lowercase = true;
        } else if (char >= "A" && char <= "Z") {
          requirements.uppercase = true;
        } else if (char >= "0" && char <= "9") {
          requirements.number = true;
        }
      });
      if (length >= 8 && requirements.lowercase && requirements.uppercase && requirements.number) {
        this.#password = password;
        console.log(this.#password);
      } else {
        console.log("error");
      }
    }
  }
  
  const obj = new User({ username: "paras_code", password: "parasA01234" });
  console.log(obj.password);
  obj.password = "fuckyou";