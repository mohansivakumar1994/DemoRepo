let obj1 = { name: "mohan sivakumar", age:5};
let obj2 = { age:5, name: "mohan sivakumar"};
let isSame = true;
if(Object.keys(obj1).lengh === Object.keys(obj2).lengh){
for (let key in obj1){
if (obj1[key] !== obj2[key]) {
isSame = false;
console.log(key + " dosent have same value"); 
}
}
} else {
}
if (isSame) {
console.log("objective are same");
} else  {
console.log("objective are different");
}