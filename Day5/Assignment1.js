//Question :-
//What is the difference between ++i and i++?
let i=1;
//Post Incrementation
console.log(i++);//output = 1


//Pre Incrementation
i=1;
console.log(++i);//output = 2

/*
    Conclusion:-
    The difference is in the order of execution,
    the order of operations between the increment of the variable and the value the operator returns
    ++i returns the value after it is incremented,
    while i++ return the value before it is incremented. 
*/ 