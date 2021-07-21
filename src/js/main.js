console.log("Right  clicked");

let RightButton = document.getElementById("RightControl");
let LeftButton = document.getElementById("LeftControl");

RightButton.addEventListener("click", function(){
    console.log("Right button clicked");
})

LeftButton.addEventListener("click", function(){
    console.log("Left button clicked");
})

