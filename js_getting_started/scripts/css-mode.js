console.log("hello!")

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom is loaded!");
    let myButton = document.getElementById("btn-mode");
    myButton.addEventListener("click", myFunction);
function myFunction(){
    let element = document.getElementsByTagName('body')[0];
    element.classList.toggle('darkmode')
}
});