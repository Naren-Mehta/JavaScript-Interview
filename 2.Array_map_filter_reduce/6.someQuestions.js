// Return names in capital latters

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

const studentNames = students.map(stu => stu.name.toUpperCase());
console.log(studentNames);


// 2. Returns students whose marks more than 70

const studentsWith70Marks = students.filter(stu => stu.marks > 70);
console.log(studentsWith70Marks);

// 3. sum of all students mask

const totalMasks = students.reduce((acc, cur) => acc+ cur.marks, 0);

console.log(totalMasks);

// 4. Return student names whose score is more then 70;

const studentNamesWithMarks70 = students.filter(stu => stu.marks > 70).map(stu => stu.name);

console.log(studentNamesWithMarks70);