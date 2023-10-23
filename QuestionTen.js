/**Exercise 10: Event Scheduler

Given an array of event objects, where each object contains a name, date, and location, 
write a program that sorts the events by date and returns a list of upcoming events.
Certainly, here are more scenarios involving arrays of objects, along with the desired results:
 */
const events = [
    { name: 'Event 1', date: '2023-10-25', location: 'Venue A' },
    { name: 'Event 2', date: '2023-11-15', location: 'Venue B' },
    { name: 'Event 3', date: '2023-12-05', location: 'Venue C' },
    { name: 'Event 4', date: '2023-01-20', location: 'Venue A' },
    { name: 'Event 5', date: '2022-01-10', location: 'Venue D' },
    { name: 'Event 6', date: '2023-12-15', location: 'Venue B' },
    { name: 'Event 7', date: '2023-10-30', location: 'Venue C' },
    { name: 'Event 8', date: '2021-02-05', location: 'Venue A' },
    { name: 'Event 9', date: '2020-01-15', location: 'Venue B' },
    { name: 'Event 10', date: '2023-11-30', location: 'Venue C' },
  ];
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month because it's zero-based
  const day = today.getDate().toString().padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
//   console.log(formattedDate);
  const upomingEvents=events.filter((item)=>{
    if(item.date > formattedDate){
        console.log(item.date)
        return item 
    }
    else{
        return
    }

  })
  console.log(upomingEvents)
  