// Q uestion :-
//4.  What will be printed to the console?
const testAsyncFunction = () =>{
    return Promise.reject('Test static reject');
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));

// output = Error in catch block Test static reject
// conclusion :-
// the promise completion was unsuccuessful/ there was some error while executing the promise.