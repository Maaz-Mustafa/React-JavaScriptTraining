// Question :-
// 7. Complete the above tasks with async/await.

const Users = fetch("https://reqres.in/api/users");

async function getUsers() {
  const data = await Users;
  //console.log(Users);
  setTimeout(() => {
    console.log(data);
  }, 2000);
}
getUsers();

let i = 1;
const interval = setInterval(() => {
  console.log(i);
  i++;
  if (i == 3) {
    clearInterval(interval);
  }
}, 1000);
