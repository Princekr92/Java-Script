let id1=document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box1"))

let user=prompt("Enter s,g or w")
let cpu1=Math.floor(Math.random()*3)
let cpu=["s","w","g"][cpu1]

const match=(cpu,user)=>{
    if(cpu==user){
        return "nobody"
    }
    else if(cpu=="s" && user=="w"){
        return "cpu"
    }
    else if(cpu=="s" && user=="g"){
        return "user"
    }
    else if(cpu=="g" && user=="w"){
        return "user"
    }
    else if(cpu=="g" && user=="s"){
        return "cpu"
    }
    else if(cpu=="w" && user=="s"){
        return "user"
    }
    else if(cpu=="g" && user=="w"){
        return "cpu"
    }
}
let result=match(cpu,user)
//console.log('the winner is'+result)
document.write(`cpu:${cpu}<br> user:${user}<br> the winner is:${result}`)