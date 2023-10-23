/**Exercise 3: Filter and Transform

Given an array of book objects, where each object contains a title and a year of publication,

write a program that filters out books published before a certain year and returns an array of 
book titles published after that year.
 */
const books = [
    { title: "Book 1", year: 2000 },
    { title: "Book 2", year: 2010 },
    { title: "Book 3", year: 1995 },
    { title: "Book 4", year: 2005 },
    { title: "Book 5", year: 2010 },
    { title: "Book 6", year: 2000 },
    { title: "Book 7", year: 1995 },
    { title: "Book 8", year: 2015 },
    { title: "Book 9", year: 2005 },
    { title: "Book 10", year: 2015 },
  ];
  

  const listBooks=books.filter(item=>{ 
    return item.year > 2010 ? item.title : null
  })
  console.log(listBooks)

  
  