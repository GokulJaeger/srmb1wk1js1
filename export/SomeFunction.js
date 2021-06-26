export default function fact(val) {
    let fact=1;
    for(let i=1;i<=val;i++){
        fact = fact*i;
    }
    return fact;
}