/**Exercise 8: Social Network Analysis

Imagine a social network represented by an array of user objects, 
where each object contains a username and an array of friends. 
Write a program that finds the user with the most friends and their list of friends.
 */
const socialNetwork = [
    {
      username: 'Alice',
      friends: ['Bob', 'Charlie', 'David'],
    },
    {
      username: 'Bob',
      friends: ['Alice', 'Eve'],
    },
    {
      username: 'Charlie',
      friends: ['Alice', 'David', 'Frank'],
    },
    {
      username: 'David',
      friends: ['Alice', 'Charlie', 'Eve'],
    },
    {
      username: 'Eve',
      friends: ['Bob', 'David'],
    },
    {
      username: 'Frank',
      friends: ['Charlie'],
    },
  ];

  const friendCounts={}
  socialNetwork.forEach((user)=>{
    friendCounts[user.username] = user.friends.length;
  })
  console.log(friendCounts)