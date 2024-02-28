// function getData(){
//     return new Promise((resolve,rejest)=>{
//         setTimeout(()=>{
//             resolve(455)

//         },3000)
//     })

// }


async function getData(){
    // simulate getting data from a server
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    return data
}
async function main(){
console.log("Loading modules");
console.log("Do something else")
console.log("Load data")
let data= await getData()

 

console.log("second data")

console.log("process data")
}

