const containerEl = document.querySelector(".container")

for (let index = 0; index <25 ; index++) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    containerEl.appendChild(boxEl);
    
}

const boxEls = document.querySelectorAll(".box")

generateColors()

function generateColors(){
    boxEls.forEach((boxEls)=>{
const NewColorCode = randomColor();

   boxEls.style.backgroundColor = "#" + NewColorCode
   boxEls.innerText = "#" + NewColorCode;
    })
}


function randomColor(){
const chars = "0123456789abcdef"
// colorCodeLength = 6;
let colorCode = ""
for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum , randomNum + 1 )
    
}
return colorCode
}