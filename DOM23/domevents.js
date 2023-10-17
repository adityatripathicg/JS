
let btn2 = document.querySelector("button");
btn2.addEventListener("click", sayhello);
// btn2.onclick = sayhello;
// btn2.onmouseenter = function () {
//     console.log("mouse hover recorded!")
// }
 function sayhello() {
    console.log("button was clicked!")
    alert("Hello There!");
};
