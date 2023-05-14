const pattern1=new RegExp("pw");
const flag='gi';
const pattern2=new RegExp('pw',flag)
// most used way to make regexp pw is pattern and g= global i=case insensitive
const pattern3= /pw/gi 
const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"


// test is only shown in dropdown when  expression is formed that had to be operarted on 
const result= pattern3.test(strToCheck)
console.log(result);

const frequency= strToCheck.match(pattern3);
console.log(frequency);

const repstring= strToCheck.replace(pattern3,'p-w')
console.log(repstring);

const webUrl = "https://pwskills.com/hitesh%20choudhary"

const rep= webUrl.replace(/%\d0/gi,'-')
console.log(rep);