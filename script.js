let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        modeBtn.innerText = "Dark Mode";
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = "light";
        modeBtn.innerText = "Light Mode";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});