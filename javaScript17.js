console.log("Prince is good boy")
console.log("education is most important each and every person")

setTimeout(()=>{
    console.log("I am single ")
},0);

setTimeout(()=>{
    console.log("I have knowledge")
},0);

console.log("The end")

const callback=(arg)=>{
    console.log(arg)
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    src.src=src;
    sc.onload=callback("prince")
    document.head.append(sc)
}