export const tcon = (val,dgr) =>{
    if(dgr == "f"){
        return (val * (9/5)) + 32;
    }
    else if(dgr == "c"){
        return (val - 32) * (5/9);
    }
    else{
        return 0;
    }
}