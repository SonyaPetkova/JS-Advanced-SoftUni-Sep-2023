
import {assert,expect} from "chai";
import { describe, it } from "mocha";

function sum(arr) {

    let sum = 0;
    
    for (let num of arr){
    
    sum += Number(num);
    
    }
    
    return sum;
    
    }

describe("sum",()=>{
    it("2+3+5=5", function() {
        assert.equal(sum( [2,3,5]), 10);
})
it("should return 0 if arr is empty", function() {
    assert.equal(sum( []), 0);
})
it("should return NaN if an element in the array is a string", function() {
    assert.isTrue(isNaN(sum([0, "ad"])));
});

})