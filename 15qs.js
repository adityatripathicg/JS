//1
let num = 1011;
if(num%10===0){
    console.log("good");
}
else{
    console.log("bad");
}
//2
let name = prompt("ENTER NAME");
let age = prompt("ENTER AGE");
console.log(`${name} is ${age} years old.`)
//3
let quarter = 1;//prompt("ENTER QUARTER NUMBER");
switch(quarter){
    case 1 :
        console.log("January","February","March");
        break;
    case 2 :
        console.log("April","May","June"); 
        break;  
    case 3 :
        console.log("July","August","September");
        break;
    case 4 :
        console.log("October","November","December");        
        break; 
}
