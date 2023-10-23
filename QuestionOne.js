/**Exercise 1: Student Grades
Create an array of student objects, where each object contains the student's 
name and an array of their exam scores. Write a program that calculates the average 
score for each student and adds a 'pass' or 'fail' property based on a passing threshold 
(e.g., an average score of 70 or above).
 */
// Solution
const students = [
    {
      name: "Alice",
      examScores: [95, 87, 92, 78, 88]
    },
    {
      name: "Bob",
      examScores: [88, 91, 84, 72, 95]
    },
    {
      name: "Charlie",
      examScores: [76, 82, 79, 89, 90]
    },
    {
      name: "David",
      examScores: [92, 94, 88, 85, 91]
    },
    {
      name: "Eve",
      examScores: [89, 3, 87, 30, 22]
    }
  ];
  let  average=0
  let sum=0
  let status=''
  for(let x in students){
      students[x].examScores.map((item)=>{
        sum+=item
      })
      average=sum/5;
      if(average>=70){
          status="Pass"
          
          
      }
      else{
         status="Fail" 
      }
      console.log(`${students[x].name}  ${status}`)
    //   console.log(sum/)
       sum=0
    //   console.log(students[x].examScores[0])
      
  }
