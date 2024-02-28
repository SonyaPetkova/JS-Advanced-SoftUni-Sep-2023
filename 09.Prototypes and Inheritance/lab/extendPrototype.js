
class Human{
    constructor(){
        
    }
}
function extendPrototype(classToExtend) {
classToExtend.prototype.species="Human",
classToExtend.prototype.toSpeciesString=function () {
    return `I am a ${this.species}. ${this.toString()}`;  
}
}

let h1=new Human();
console.log(h1);
extendPrototype(Human)
console.log(h1);
console.log(h1.toSpeciesString());

