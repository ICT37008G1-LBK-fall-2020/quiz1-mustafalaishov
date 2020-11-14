let studentsArray1 =
[
    {id: 1, name: 'Mustapa', gpa: 4},
    {id: 2, name: 'Hamid', gpa: 3.5},
    {id: 3, name: 'Islam', gpa: 2},
    {id: 4, name: 'Dato', gpa: 1}
];
let studentsArray2 =
[
    {id: 1, name: 'Luka', gpa: 4},
    {id: 2, name: 'Aleqs', gpa: 2.5},
    {id: 3, name: 'Giorgi', gpa: 2.5},
    {id: 4, name: 'Venera', gpa: 3},
    {id: 5, name: 'Natasha', gpa: 1}
];

function getTopStudents(studentsArray1, studentsArray2)
{
    let allStudents = studentsArray1.concat(studentsArray2);
    allStudents.sort((a, b) => a.gpa - b.gpa);

    let result = [];


    for (let i=allStudents.length-5; i<allStudents.length; i++)
    {
        result.push(allStudents[i]);
    }

    let lastStudentIndex = allStudents.length - 5;

    for (let i=lastStudentIndex-1; allStudents[i].gpa == allStudents[lastStudentIndex].gpa; i--)
    {
        result.push(allStudents[i]);
    }


    result.sort((a, b) => a.gpa - b.gpa);

    return result;
}

let answer = getTopStudents(studentsArray1, studentsArray2);
alert (answer.map(c => c.name));