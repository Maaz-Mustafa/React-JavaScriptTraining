// Question :-
// 6. Create a promise that makes a fetch call, but resolves with the data
// only 2 seconds after the data has been received in the fetch.


let promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let data=fetch("https://reqres.in/api/users")
        resolve(data);
        }, 2000)
        
        
});
    
promise
.then(data=>data.json())
.then(data=>{
        console.log(data);
})



let i=1;
const interval=setInterval(()=>{
    

    console.log(i);
    i++;
    if(i==3){
        clearInterval(interval);
    }
},1000);

