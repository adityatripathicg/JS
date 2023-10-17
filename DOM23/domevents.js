// let btn = document.createElement("button");
// let body = document.querySelector("body");
// btn.innerHTML = "Hello";
let btn2 = document.querySelector("button");
// body.appendChild(btn);
btn2.onclick = sayhello;
btn2.onmouseenter = function () {
    console.log("mouse hover recorded!")
}
// function () {
//     console.log("Hello!")
// };
 function sayhello() {
    console.log("button was clicked!")
    alert("Hello There!");
};
