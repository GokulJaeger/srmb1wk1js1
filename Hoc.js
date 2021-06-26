
const fact = (x) => { 
    let val = 1;
    for(let i=1;i<=x;i++){
        val = val*i
    }
    return val;
};

const hoc = (dta,fn) => {
    let val = dta /5; 
    console.log("Value: ",val); 
    return fn(val);
}

let res3 = hoc(100,fact)
       
console.log("The factor: ",res3);