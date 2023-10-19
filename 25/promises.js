function savetoDB(data) {
    return new Promise((resolve, reject) => { 
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if (internetspeed > 4) {
            resolve("Success : Data was Saved");
        } else {
            reject("Weak Connection");
        }
    });
}


savetoDB("CG")
    .then((result) => {
        console.log("Promise was resolved: " + result);
        return savetoDB("Hello");
    })
    .then(()=>{
        console.log("Data 2 Saved");
    })
    .catch((error) => {
        console.log("Promise was rejected: " + error);
    });
