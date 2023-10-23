/**Exercise 7: User Authentication

Given an array of user objects, where each object contains a username and a password, 
write a program that checks if a given username and password match any of the objects in the array.
 Return a message indicating whether the login is successful or not.
 */
 const users = [
    { username: 'Fatima', password: 'fatima123' },
    { username: 'alice.smith', password: 'myP@ssw0rd' },
    { username: 'bob.jones', password: 'p@55w0rd' },
    { username: 'emily.smith', password: 'secret123' },
    { username: 'mike.jenkins', password: 'userPass' },
    { username: 'sarah.wilson', password: 'p@$$w0rd' },
    { username: 'alex.miller', password: '12345' },
    { username: 'lisa.johnson', password: 'pa$$w0rd' },
    { username: 'chris.brown', password: 'letmein' },
    { username: 'olivia.davis', password: 'tiger123' },
  ];
//   const userInput ='mike.jenkins';
//   const passwordInput = "userPass";
//   users.filter((item)=>{
// item.username===userInput && item.password===passwordInput ? console.log('login Successfull'):console.log("try again")
//   })
function loginUser(username, password) {
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (user) {
      return 'Login successful';
    } else {
      return 'Login failed. Please try again.';
    }
  }
  
  // Example usage:
  const username = 'bob.jones';
  const password = 'p@55w0rd';
  
  const loginResult = loginUser(username, password);
  console.log(loginResult);