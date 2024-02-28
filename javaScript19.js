let a=prompt("Enter first number")
let b=prompt("Enter second number")

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b)

function main(){
let x=1;
try{

    console.log(sum*x)
    return true
}
catch(error){
    console.log("error aa gya bhai")
    return false
}
finally{
    console.log("files are being closed and db connection is being closed")
}
// if you want to print after return then used to finally in function
}
let c=main()

