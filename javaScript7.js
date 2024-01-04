document.write("Hello")
alert("hello")

let a=setTimeout(function(){
    alert("I am inside of settimeout")
},2000)

clearTimeout(a)
console.log(a)