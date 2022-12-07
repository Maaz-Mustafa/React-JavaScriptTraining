//Question :-
//Write a function that returns a nested key within an object:
//getNestedKey(obj, “address.details.1”)
//This should return “Privet Drive”

let obj = {
    name:"Harry Potter",
    age: 12,
    address: {
    details: ["4", "Privet Drive"],
    area:"Little Whinging",
    city: "Surrey",
    state: "England"
    } 
  }


function makeFlatObject(object){
    let flatObject={};
    for(const [key,value] of Object.entries(object)){

        if(typeof value !== "object"){
            flatObject[key]=value;
        }
        else if(typeof value === "object"){
            const recursiveObj=makeFlatObject(value);
            for(let property in recursiveObj){
                flatObject[key+"."+property]=recursiveObj[property];
            }
        }

    }
    return flatObject;
}

let getNestedKey=(object,stringProperty)=>{
    const flatObj=makeFlatObject(object)
    
    for(let key in flatObj){
        
        if(key===stringProperty){
            return flatObj[key];
        }
    }
}

console.log(getNestedKey(obj, "address.details.1"));
