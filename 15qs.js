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
console.log(`${name} is ${age} years old.`);
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
//4
let str = "A big fat hen.";
if(str[0] =='a' || str[0]=='A' && str.length>5){
    console.log("Golden String");
}
else{
    console.log("Not a Golden String");
}
//5
let a = 10;
let b = 20;
let c = 30;
if(a>b && a>c){
    console.log("the largest num is ", a);
}
else if(b>a && b>c){
    console.log("the largest num is ", b);
}
else{
    console.log("the largest num is ", c);
}

//6
let num1 = 221;
let num2 = 222221;
if((num1%10)==(num2%10)){
    console.log("both have same last digit");
}
else{
    console.log("both do not have same last digit");
}
