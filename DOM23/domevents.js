
let btn2 = document.querySelector("button");
btn2.addEventListener("mouseout", sayhello);
// btn2.onclick = sayhello;
// btn2.onmouseenter = function () {
//     console.log("mouse hover recorded!")
// }
 function sayhello() {
    console.log("button was clicked!")
    alert("Hello There!");
};


//keyboard events
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (events) {
    console.log(events.code);
    console.log(events.key);    
    console.log("Key was pressed!");
});

//form events
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form was submitted!");
    //extracting form data
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
});






