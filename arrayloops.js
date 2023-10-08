let fruits = ["apple","banana","mango"];
for(let i = 0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}
let heroes = [["ironman","hulk","thor"],["superman","wonder women","batman"]];
for(let i = 0;i<heroes.length;i++){
    console.log(`List #${i}`);
    for (let j = 0; j <= heroes.length; j++) {
        console.log(heroes[i][j]);
    }
}
//for of loop
for(hero of heroes){
    for(names of hero){
        console.log(names);
    }
}