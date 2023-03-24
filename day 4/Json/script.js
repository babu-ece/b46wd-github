let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
function isEqual(obj1,obj2){
let obj1keys=Object.keys(obj1);
let obj2keys=Object.keys(obj2);

if (obj1keys.length != obj2keys.length){
    return false;
}

for (let obj1key of obj1keys){
    if (obj1[obj1key] != obj2[obj1key]){
        return false;
    }
}

return true;
}

console.log(obj1,obj2);