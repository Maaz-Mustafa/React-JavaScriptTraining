// Question :-
// What will be printed to the console?

const testAsyncFunction = () =>{
    return new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
    resolve('Test Resolve');
    } else {
    reject('Test Reject');
    }
    }).catch((err) =>{
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
    });
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

// output = Response in then block:  Test Resolve
// conclusion :-
// there was no error in the if...else block,and  hence the catch block 
// didn't exectute resulting the forced error wasn't thrown and thus the 
// promise resolved successfully
