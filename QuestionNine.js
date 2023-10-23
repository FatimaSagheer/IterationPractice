/**Exercise 9: Music Library

Create an array of song objects, where each object includes a title, artist, and duration. 
Write a program that finds all songs longer than a specified duration and returns them in a separate array.
 */
const songs = [
    { title: 'Song 1', artist: 'Artist 1', duration: '3:45' },
    { title: 'Song 2', artist: 'Artist 2', duration: '4:20' },
    { title: 'Song 3', artist: 'Artist 1', duration: '3:15' },
    { title: 'Song 4', artist: 'Artist 3', duration: '2:50' },
    { title: 'Song 5', artist: 'Artist 2', duration: '4:10' },
    { title: 'Song 6', artist: 'Artist 4', duration: '3:30' },
    { title: 'Song 7', artist: 'Artist 3', duration: '2:45' },
    { title: 'Song 8', artist: 'Artist 1', duration: '3:55' },
    { title: 'Song 9', artist: 'Artist 4', duration: '3:15' },
    { title: 'Song 10', artist: 'Artist 2', duration: '4:00' },
  ];
  const allSongs={}
  let duration="3:15"
 songs.map((item)=>{
    if(item.duration>duration)
    {
        allSongs[item.title]=item.duration
    }
    else{
        return
    }
  })
  console.log(allSongs)
 