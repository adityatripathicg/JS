let todo = [];
let req = prompt("Enter your Request");
while(true){
    if(req == "quit"){
        console.log("exiting app");
        break;
    }
    if(req == "list"){
        for(task of todo){
            console.log(task);
        }
    }
    else if(req == "add"){
        let task = prompt("Enter your task to add");
        todo.push(task);
        console.log("task added");
    }
    // else if(req == "delete"){
    //     todo
    // }
    //req = prompt("Enter your Request");
    else{
        console.log("wrong Request!")
    }
}