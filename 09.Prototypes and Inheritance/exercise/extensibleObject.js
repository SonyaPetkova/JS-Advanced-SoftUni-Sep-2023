function extensibleObject() {
    let parentObj={};
    let childObj=Object.create(parentObj)

    childObj.extend=function (obj) {
        let objArr=Object.entries(obj);
        for(let [key,value]of objArr){
            if(typeof value==="function"){
                parentObj[key]=value;
            }else{
                childObj[key]=value
            }
        }
    }
    return childObj
}