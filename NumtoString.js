function convertInput(ip) {
    let cip;
    if(typeof(ip) == "string"){
        cip = parseInt(ip);
        console.log(`converted string: ${ip} to ( ${cip}: type = ${typeof(cip)} )`);
    }
    else if(typeof(ip) == "number"){
        cip = ip.toString();
        console.log(`converted number: ${ip} to ( ${cip}: type = ${typeof(cip)} )`);
    }
    else{
        console.log(`Invalid!`);
    }
}

convertInput("23443");
convertInput("Laddu");
convertInput(34234);