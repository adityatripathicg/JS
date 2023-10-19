let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay);
    });
}

    changecolor("red",1000)
    .then(()=>{
        console.log("Red done");
        return changecolor("orange",1000);
    })
    .then(()=>{
        console.log("orange done")
        return changecolor("blue",1000);
    })
    .then(()=>{
        console.log("Blue done!");
    })

    
    // changecolor("Green",1000);
    // changecolor("red",1000);