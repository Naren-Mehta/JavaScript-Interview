// 4. Return student names whose score is more then 70;
const students = [
    {
        name: "Naren",
        age: 33,
        marks: 60,
    },
    {
        name: "Singh",
        age: 24,
        marks: 75,
    },
    {
        name: "Mehta",
        age: 45,
        marks: 80,
    }
]

const studentNamesWithMarks70 = students.filter(stu => stu.marks > 70).map(stu => stu.name);

console.log(studentNamesWithMarks70);