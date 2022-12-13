
// Question :-
// Visit any page on the browser, and replace the content of all the p tags 
// with the phrase “How’s the Josh?” using Javascript

const tags=document.getElementsByTagName("p");
for(let i=0;i<tags.length;i++){
    tags[i].innerHTML="How's The Josh?"
}

// Running this script on console directly changes the inner HTML of all the <p> tags 
// to "How's The Josh";
