var veh1 = "Jet";//global scope

function country() {
    let veh2 = "Bus";//block scope
    console.log("Inside Country:");
    console.log(veh1)
    console.log(veh2);
    let boo = true;
    if(boo){
        let veh3 = "Car"; //block scope
        console.log("Inside State:");
        console.log(veh3);
        console.log(`${veh2}: inside State`);
    }
    else if(boo){
        let veh4 = "Motorbike";//block scope
        console.log("Inside District:");
        console.log(veh4);
        console.log(`inside district: ${veh2}`);
    }
    else{
        console.log("-----")
    }
}
country();
console.log("Outside Country:");
console.log(`Airways: ${veh1}`);
console.log(`Roadways:(Bus) ${veh2}`);
console.log(`Roadways:(Car) ${veh3}`);
console.log(`Roadways:(Motorbike) ${veh4}`);

