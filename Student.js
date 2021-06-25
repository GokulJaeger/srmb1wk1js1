class Student{
    
    constructor(id, name, addr, city, mark){
        this.id = id;
        this.name = name;
        this.addr = addr;
        this.city = city;
        this.mark = mark;
    }

    display(){
        console.log(`Student Details`);
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.addr}`);
        console.log(`City: ${this.city}`);
        console.log(`Mark: ${this.mark}`);
    }
}