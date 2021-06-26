const student = [{ id: 8, name: "Gokul", Addr: "Anna Nagar", city: "Banglore", mark: 60 },
{ id: 14, name: "laddu", Addr: "Ramapuramr", city: "Chennai", mark: 79 },
{ id: 20, name: "sachin", Addr: "Palavansathu", city: "Vellore", mark: 80 },
{ id: 16, name: "sweatha", Addr: "Adaiyar", city: "Banglore", mark: 63 },
{ id: 32, name: "Jian", Addr: "Gandhipuram", city: "Kanchipuram", mark: 86 }
];

const student1 = [{ id: 8, name: "Gokul", Addr: "Anna Nagar, 65452023", city: "Banglore", mark: 60 },
{ id: 14, name: "laddu", Addr: "Ramapuramr, 845210", city: "Chennai", mark: 79 },
{ id: 20, name: "sachin", Addr: "Palavansathu 600023", city: "Vellore", mark: 80 },
{ id: 16, name: "sweatha", Addr: "Adaiyar 632002", city: "Banglore", mark: 63 },
{ id: 32, name: "Jian", Addr: "Gandhipuram 600023", city: "Kanchipuram", mark: 86 }
];

const student2 = [{ id: 8, name: "Gokul", Addr: "Anna Nagar, 65452023", city: "Banglore", mark: 60 },
{ id: 14, name: "laddu", Addr: "Ramapuramr, 845210", city: "Chennai", mark: 79 },
{ id: 20, name: "sachin", Addr: "Palavansathu 600023", city: "Vellore", mark: 80 },
{ id: 16, name: "sweatha", Addr: "Adaiyar 632002", city: "Banglore", mark: 63 },
{ id: 32, name: "Jian", Addr: "Gandhipuram 600023", city: "Kanchipuram", mark: 86 }
];

// const upmark = student.map((li) => {
//     return li.mark += li.mark + 20;
// });

student.sort((a, b) => (a.name > b.name) ? 1 : -1);

console.log("Name Sort:");
console.log(student);

student.sort((a, b) =>  (a.name > b.name)? 1 : -1).sort((a,b)=> (a.city > b.city)? 1 : -1);

console.log("Name and City Sort:");
console.log(student);


console.log("Add 20 marks:");

const am = student1.map((val)=>{
    if(val.mark>0){
        val.mark = val.mark+20;
        return val;
    }
});

console.log(am);


console.log("Add 15 and 20 marks.")
const difm = student2.map((val)=>{
    if(val.Addr.endsWith("600023")){
        val.mark = val.mark+15;
        return val;
    }
    else{
        val.mark = val.mark+20;
        return val;
    }
});

console.log(difm);



const student3 = [{ id: 8, name: "Gokul", Addr: "Anna Nagar, 65452023", city: "Banglore", mark: 60 },
{ id: 14, name: "laddu", Addr: "Ramapuramr, 845210", city: "Chennai", mark: 79 },
{ id: 20, name: "sachin", Addr: "Palavansathu 600023", city: "Vellore", mark: 80 },
{ id: 16, name: "sweatha", Addr: "Adaiyar 632002", city: "Banglore", mark: 63 },
{ id: 32, name: "Jian", Addr: "Gandhipuram 600023", city: "Kanchipuram", mark: 86 }
];


var valname = "Jian"
console.log(`Find value and remove: ${valname}`);

const newl = student3.filter((val,idx)=>{
    if(val.name!= valname){
        return val;
    }
    else{
        student3.splice(idx)
        console.log(`${valname} found in Index: ${idx}`);
    }
});

console.log(student3);

