let arr = [2,3,4,5,6,7,8,8,9,10];
let n = 3;
//1
console.log(arr.slice(0,n));
//2
console.log(arr.slice(-n));
//3
let str = "";
if(str.length == 0){
    console.log("empty string");
}
else{
    console.log("not empty");
}
//4
let strings = " hellO my name is cg         ";
let idx = 3;
if(strings[idx] == strings[idx].toLowerCase()){
    console.log("lowercase");
}
else{
    console.log("not lowercase");
}
//5
console.log("before removing spaces", strings);
console.log("after removes spaces", strings.trim());
//6
let item = 9;
if(arr.indexOf(item)!= -1){
    console.log("exists");
}
else{
    console.log("not exists");
}