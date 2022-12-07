// Question :-
//1. Write a function that can stop execution of a function 
//for the number of milliseconds sent as an argument

const func = async () => {
    console.log("Printing before")
    //Call your function here eg. sleep(3000)
    await asyncFunc(3000);
    console.log("Printing after")
}

function asyncFunc(no){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sleeping for "+no/1000+" seconds");
            resolve();
        },no)
    })
    return promise;
}

func();