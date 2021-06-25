
function checkNum(st) {
    if (!isNaN(st))
        return true;
    else
        return false;
}

let str1 = "SRMTech";
let str2 = '12345';
let str3 = "Laddu14";
console.log(`checking ${str1}`);
console.log(checkNum(str1));
console.log(`checking ${str2}`);
console.log(checkNum(str2));
console.log(`checking ${str3}`);
console.log(checkNum(str3));