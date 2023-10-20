async function hello(){
    //throw "error";
    return "CG";
}
hello()
.then((result)=>{
    console.log("Greeted", result);
})
.catch((error)=>{
    console.log("Not Greeted", error);
})
let arrowfn = async ()=>{
    return 5;
}

//change color
let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay);
        console.log(`color was changed to : ${color}`);
        
    }) 
    
}
async function change(){
    await changecolor("Red",1000);
    await changecolor("blue",1000);
    await changecolor("green",1000);
    return "Done";
}
change();

