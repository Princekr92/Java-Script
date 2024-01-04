// syncronous programming
// let a=prompt("what is your name")
// let b=prompt("what is your age")
// let c=prompt("what is your favourate color")
// console.log(a+ b+c)

// Asynchronous programming
// console.log("start")
// setTimeout(function(){
//     console.log("hey I am good person");
// },3000)
// console.log("end")

//Callbacks
function loadScript(src){
    var script=document.createElement("script")
    script.src=src
    script.onload=function(){
        console.log("Loaded script with src" + src)
        callback(null,src);
    }
    script.onerror=function(){
        console.log("error loading script with src"+src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}
  function hello(error,src){
    if(error){
        console.log(error)
        return 
    }
    alert('hello dunia'+src)
  }

function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return;
    }
    alert('hello india'+src)
}
loadScript("https://cdn.jsdelivr.net/npn/bootstrap@5.2.1/dist/bootstrap.bundle.min.js",goodmorning)