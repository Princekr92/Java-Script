console.log("this is script.js insert")
let boxes=document.querySelector(".container").children


function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255)
    let val2=124;
    let val3=111;
    return `rgb(${val1},${val2},${val3})`

}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})