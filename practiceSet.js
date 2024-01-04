// problem 1
// let arr=[1,2,3,4,5,6]
// let a=prompt("Enter the no")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// problem 2
// let arr=[1,2,3,4,5,6]
// let a
// do{
// a=prompt("Enter the no")
// a=Number.parseInt(a)
// arr.push(a)
// }
// while(a!=0)
// console.log(arr)

// problem 3
// let arr=[1,2,30,4,23,1,345]
// arr.filter((x)=>{
//     return x%10
// })
// console.log(arr)

// problem 4
let arr=[1,2,30,4,23,1,345]
let n=arr.map((x)=>{
    return x*x
})
console.log(n)

// problem 5
let arr1=[1,2,4,6]
let n1=arr1.reduce((h1,h2)=>{
    return h1*h2
})
console.log(n1)