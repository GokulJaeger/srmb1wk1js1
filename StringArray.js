let usernames = ["Gokul", "Sachin", "Latha", "Karthik", "Gomathi", "Amul"];

const newarr = usernames.map((ele, id) => {
    if (id % 2 == 0) {
        return `Er.${ele}`;
    } else {
        return `Dr.${ele}`;
    }
});

for (let v = 0; v < usernames.length; v++) {
    console.log(`${usernames[v]}`);
}
console.log(usernames);
console.log(newarr);

const editarray = newarr.map((val) => {
    if (val.startsWith('rD')) {
        return `${val}-San`;
    }
    else {
        return val;
    }
}
);
console.log(editarray);