let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 9")
    },3000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 10")
    },3000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 11")
    },3000)
})

p1.then((value)=>{
    console.log(value)
})