class Textbox {
    //TODO
    constructor(selector,regex){
        this.selector=selector;
        this.regex=regex;
    }
    get value{
       return this.selector
    }
    set value(value){
        return _value=document.querySelectorAll(this.selector)
    }


}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');
console.log(inputs);
inputs[0].addEventListener('click',function(){console.log(textbox.value);});
inputs[1].addEventListener('click',function(){console.log(textbox.value);});