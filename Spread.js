function addData(...data){
    let c = 0 ;
    for(let i = 0;i<data.length;i++){
        c=c+data[i];
    }
    return c;
}


console.log(addData(5,23,3,7,13,97,45,2,12,77,9,23,15,85,8,4,7,1,8));



const employee1 = {
    name : "kishore",  
    email : "kishore@gmail.com"
}

const employee2 = {
    name : "gokul",
    email : "goku@gmail.com"
}

const employee3 = {
    manager : "vishal"
    
}

let addemp = [
    {name:"Gokul",age:24},
    {name:"laddu",age:23}
];

var adddet = [
    {id:3,company:"SRM TECH",addr:"RMZ"}
]


const items = {
    cost:100,
    ...employee1,
    ...addemp,
    ...adddet,
    ...employee2,
    ...employee3
}

items.pin = 600059;

console.log(items);