// Question :-
// 6. Create a promise that makes a fetch call, but resolves with the data
// only 2 seconds after the data has been received in the fetch.

const getUsers = fetch("https://reqres.in/api/users");

getUsers.then((data) => {
  setTimeout(() => {
    console.log(data);
  }, 2000);
});

let i = 1;
const interval = setInterval(() => {
  console.log(i);
  i++;
  if (i == 3) {
    clearInterval(interval);
  }
}, 1000);
