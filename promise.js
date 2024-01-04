// promise
let promise=new Promise(function(resolve,reject){
    alert("I am an alert in promise")
    resolve(56)
})

console.log("hello india")
setTimeout(function(){
    console.log("welcome to india")
},5000)
console.log("my name is "+"prince kumar")
console.log(promise)

// to get the value
promise.then((value)=>{
    console.log(value)
})

// to catch the error
promise.catch((error)=>{
    console.log("some error occured in ")
})

 