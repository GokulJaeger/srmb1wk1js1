

function changeDate(val) {
    
    let ne = val;

    let y = ne.getFullYear();
    let m = ne.getMonth();
    let d = ne.getDate();
    let h = ne.getHours();
    let mm = ne.getMinutes();
    let s = ne.getSeconds();
    console.log(`${y}-${m}-${d}  ${h}:${mm}:${s}`);
}

var now = new Date();
var yes = new Date();
yes.setDate(now.getDate()-1);
changeDate(now);
changeDate(yes);