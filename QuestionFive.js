/**Exercise 5: Movie Library

Given an array of movie objects, where each object contains a title, year, and genre, 
write a program that organizes movies by genre into separate arrays or objects. 
For example, you should produce a data structure that groups all action movies together, 
all comedy movies, etc.
 */
const movies = [
    { title: 'Movie 1', year: 2021, genre: 'Action' },
    { title: 'Movie 2', year: 2020, genre: 'Drama' },
    { title: 'Movie 3', year: 2022, genre: 'Comedy' },
    { title: 'Movie 4', year: 2021, genre: 'Action' },
    { title: 'Movie 5', year: 2020, genre: 'Drama' },
    { title: 'Movie 6', year: 2019, genre: 'Comedy' },
    { title: 'Movie 7', year: 2022, genre: 'Action' },
    { title: 'Movie 8', year: 2019, genre: 'Drama' },
    { title: 'Movie 9', year: 2020, genre: 'Comedy' },
    { title: 'Movie 10', year: 2021, genre: 'Action' },
  ];
  const genreWiseMovies={}
  movies.forEach(movie => {
    const { title, genre } = movie;
    if(!genreWiseMovies[genre])
   { 
    genreWiseMovies[genre]=[];
}
   else{
    genreWiseMovies[genre].push(movie.title)
   }

  })
  console.log(genreWiseMovies)


  