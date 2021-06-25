let n = [1, 82, 13, 44, 5, 56, 17, -14, -6, -98, -334, -675, -8];

function isPrime(k){
    let flag=0;
    for(let i=2;i<k;i++){
        if(k%i==0){
            flag+=1;
        }
    }
    if(flag == 0){
        return true;
    }
    else{
        return false;
    }
}

const prime = n.map((i) => {
    if (i > 0) {
        return i;
    }
}).filter((j) => {
    if(isPrime(j)){
        return j;
    }
});

console.log(n);

console.log(prime);
