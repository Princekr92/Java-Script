console.log("peigon")

//document.getElementById("redbox").style.backgroundColor="green"

// this one is only first box will be color
//document.querySelector(".box").style.backgroundColor="red"

// this one method using for all the box will be color
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink"
})
console.log(document.querySelectorAll(".box"))