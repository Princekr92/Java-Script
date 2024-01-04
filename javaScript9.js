
btn.addEventListener('click',function(e){
    alert("Hello World!")
})

btn.addEventListener('click',function(e){
    alert("Hello India")
})
let a=prompt("what is your name")
if(a==2){
    btn.removeEvtListener('click',function(e){
        alert("Hello world")
    })
}