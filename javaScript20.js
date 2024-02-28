// let obj={
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;// sets rabbit.[[prototype]]=animal

class Animal{
    constructor(){
        this.name=name
        console.log("object is created...")
    }
    eats(){
        console.log("i am eating")
    }
    jumps(){
        console.log("I am jumping")
    }
}

class Lion extends Animal{

}


let a=new Animal("oreo")
console.log(a);

let l=new Lion("Shera")
console.log(l)