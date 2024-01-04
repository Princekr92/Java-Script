//let num=[1,2,3,4,5];
//let num2=[23,45,2,6,77]

// 1.pop method
// let r=num.pop();
// console.log(num,r);

// 2.push method
// let r=num.push(34)
// console.log(num,r)

// 3.shift method
// let r=num.shift()
// console.log(num,r)

// 4.unshift method
// let r=num.unshift(56)
// console.log(num,r)

// 5.concat method
// let newArray=num.concat(num2)
// console.log(newArray)
// console.log(num,num2)

// 6.sort method
// let compare=(a,b)=>{
//     return a-b
// }
// num2.sort(compare)
// num2.reverse()
// console.log(num2)

// 7.Splice 
// let num3=[551,22,, 45, 33, 22]
// let deletedValues=num3.splice(2,4,45,332,455)
// console.log(deletedValues)

// 8.slice method
// let num3=[1,2,3,4,5];
// let newNum=num3.slice(2,5)
// console.log(newNum)

// Loops 
// let num=[3,5,1,2,4]
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// for...of
//    for(let i of num){
//     console.log(i);
//    }

// for...each
// num.forEach((element)=>{
//     console.log(element*element)
// })

// for...in
// for(let i in num){
//     console.log(i)
// }


// Array from
// let name="Prince"
// let arr=Array.from(name)
// console.log(arr)

// Array map method
// let arr=[45,23,21]
// let a=arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value+1
// })
// console.log(a);

// Array filter method
// let arr2=[34,45,23,5,8]
// let a2=arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2);

// Array reduce method
let arr3=[1,2,3,5,3,1]
let new3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(new3)

