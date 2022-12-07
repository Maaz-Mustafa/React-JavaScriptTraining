// Question :-
// 7. Complete the above tasks with async/await.

let promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let data=fetch("https://reqres.in/api/users")
        .then(data=>data.json())
        resolve(data);
        }, 2000)
             
});

async function waitingFunc(){
    let data=await promise;
    console.log(data);
}

waitingFunc();


let i=1;
const interval=setInterval(()=>{
    

    console.log(i);
    i++;
    if(i==3){
        clearInterval(interval);
    }
},1000);