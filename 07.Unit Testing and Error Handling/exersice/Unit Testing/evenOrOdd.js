import { it } from "mocha";
import {expect} from "chai"

function isOddOrEven(string) {

    if (typeof(string) !== 'string') {
    
    return undefined;
    
    }
    
    if (string.length % 2 === 0) {
    
    return "even";
    
    }
    
    return "odd";
    
    }




describe("isOddOrEven",function(){

    it("should return even for an even string length",function () {
        expect(isOddOrEven("ab")).to.equal("even");
        
    });

    it("should return odd for an odd string length",function () {
        expect(isOddOrEven("abc")).to.equal("odd")
    })
    it("should return odd and even as output for passing two arguments",function () {
        expect(isOddOrEven("abc","ab")).to.equal("odd","even")
    })
    it("should equal undefined when passing parameter different tha string",function () {
        expect(isOddOrEven(1,["ab"])).to.equal(undefined,undefined)
    })
    
})