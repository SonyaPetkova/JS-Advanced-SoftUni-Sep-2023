(function solve(){

   
    Array.prototype.last=function(){
    return this.pop()
    }
    Array.prototype.skip=function(n){
        if (n<0||n>this.length) {
            throw new Error("Index is outside the bounds")
        }
   return this.slice(n)
    
    }
    Array.prototype.take=function(n){
        if (n<0||n>this.length) {
            throw new Error("Index is outside the bounds")
        }
        return  this.slice(0,n);
    }
    Array.prototype.sum=function(){
    return this.reduce((a,b)=>a+b)
    }
    Array.prototype.average=function(){
        let sum=  this.reduce((a,b)=>a+b)
        return sum/this.length
    
    }
})();
let myArr=[1,2,3]
console.log(myArr.skip(3));
