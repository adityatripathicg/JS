let fav = "endgame";
let guess = prompt("Guess my favorite Movie Name");
while((fav != guess) && (guess!="quit")){
    guess = prompt("Wrong! Try Again");
    console.log("wrong guess try again!");
}
console.log("exited successfully!");
